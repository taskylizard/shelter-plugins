const {
  plugins: { installedPlugins, addLocalPlugin, removePlugin },
  plugin: { store },
  ui: {
    ButtonSizes,
    SwitchItem,
    Divider,
    Header,
    HeaderTags,
    Button,
    TextBox,
    Space,
    IconAdd,
    ButtonColors,
    ButtonLooks,
    showToast
  },
  solid: { createSignal }
} = shelter
import { deflateSync as deflate, inflateSync as inflate } from 'fflate'
import { Flex } from '../../components/flex'

const DEFAULT_API_URL = 'http://localhost:3000'

// Store default settings
store.apiUrl ??= DEFAULT_API_URL
store.autoSync ??= false
store.oauthVerified ??= false
store.accessToken ??= null

const SYNC_INTERVAL = 15 // minutes

let syncIntervalId: number | null = null

// Function to check OAuth settings
async function checkOAuthSettings(): Promise<boolean> {
  if (store.apiUrl === DEFAULT_API_URL) return true
  try {
    const response = await fetch(`${store.apiUrl}/oauth/settings`)
    if (!response.ok) return false
    
    const data = await response.json()
    return !!(data?.client_id && data?.redirect_uri)
  } catch (error) {
    console.error('Failed to check OAuth settings:', error)
    return false
  }
}

// Function to sync plugins
async function syncPlugins() {
  const plugins = installedPlugins()
  const data = {
    plugins
  }

  try {
    // Convert data to string
    const jsonString = JSON.stringify(data)

    // Convert string to Uint8Array for compression
    const textEncoder = new TextEncoder()
    const uint8Array = textEncoder.encode(jsonString)

    // Compress the data
    const compressed = deflate(uint8Array)

    const response = await fetch(`${store.apiUrl}/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer ${store.accessToken}`
      },
      body: compressed
    })

    if (!response.ok) {
      if (response.status === 401) {
        store.oauthVerified = false
        store.accessToken = null
        throw new Error('Authentication failed. Please reauthorize.')
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    showToast({ message: 'Settings synced successfully!', type: 'success' })
    return await response.json()
  } catch (error) {
    console.error('Failed to sync plugins:', error)
    showToast({ message: error.message || 'Failed to sync settings', type: 'error' })
  }
}

// Settings component
export function settings() {
  const [syncing, setSyncing] = createSignal(false)
  const [tempApiUrl, setTempApiUrl] = createSignal(store.apiUrl)
  const [isLoading, setIsLoading] = createSignal(false)
  const [isAuthorizing, setIsAuthorizing] = createSignal(false)


  const handleSync = async () => {
    setSyncing(true)
    await syncPlugins()
    setSyncing(false)
  }

  const handleAuthorize = async () => {
    setIsAuthorizing(true)
    try {
      const response = await fetch(`${store.apiUrl}/oauth/settings`)
      if (!response.ok) throw new Error('Failed to get OAuth settings')
      
      const { client_id, redirect_uri } = await response.json()
      if (!(client_id && redirect_uri)) throw new Error('Invalid OAuth settings')
      
      // Open OAuth window
      const authWindow = window.open(
        `https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`,
        'ShelterSync OAuth',
        'width=500,height=800'
      )

      // Poll for OAuth completion
      const checkInterval = setInterval(async () => {
        try {
          const tokenResponse = await fetch(`${store.apiUrl}/oauth/callback/check`)
          if (tokenResponse.ok) {
            const { access_token } = await tokenResponse.json()
            store.accessToken = access_token
            store.oauthVerified = true

            authWindow?.close()
            clearInterval(checkInterval)
            showToast({ message: 'Successfully authorized!', type: 'success' })
          }
        } catch (error) {
          console.error('OAuth check failed:', error)
        }
      }, 2000)

      // Cleanup if window is closed
      const closeCheck = setInterval(() => {
        if (authWindow?.closed) {
          clearInterval(closeCheck)
          clearInterval(checkInterval)
          setIsAuthorizing(false)
        }
      }, 500)

    } catch (error) {
      console.error('Failed to start OAuth flow:', error)
      showToast({ message: 'Failed to start authorization', type: 'error' })
    } finally {
      setIsAuthorizing(false)
    }
  }

  const handlePull = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${store.apiUrl}/settings`, {
        headers: {
          'Authorization': `Bearer ${store.accessToken}`
        }
      })

      if (!response.ok) {
        if (response.status === 401) {
          store.oauthVerified = false
          store.accessToken = null
          throw new Error('Authentication failed. Please reauthorize.')
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const compressedData = new Uint8Array(await response.arrayBuffer())
      const decompressed = inflate(compressedData)
      const textDecoder = new TextDecoder()
      const jsonString = textDecoder.decode(decompressed)
      const { plugins } = JSON.parse(jsonString)

      // Remove existing plugins
      Object.keys(installedPlugins()).forEach(id => {
        removePlugin(id)
      })

      // Add pulled plugins
      Object.entries(plugins).forEach(([id, plugin]: [string, any]) => {
        addLocalPlugin(id, plugin)
      })

      showToast({ message: 'Settings pulled successfully!', type: 'success' })
    } catch (error) {
      console.error('Failed to pull settings:', error)
      showToast({ message: error.message || 'Failed to pull settings', type: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${store.apiUrl}/settings`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${store.accessToken}`
        }
      })

      if (!response.ok) {
        if (response.status === 401) {
          store.oauthVerified = false
          store.accessToken = null
          throw new Error('Authentication failed. Please reauthorize.')
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      showToast({ message: 'Settings deleted successfully!', type: 'success' })
    } catch (error) {
      console.error('Failed to delete settings:', error)
      showToast({ message: error.message || 'Failed to delete settings', type: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleAutoSync = (newVal: boolean) => {
    store.autoSync = newVal

    if (newVal) {
      if (syncIntervalId) clearInterval(syncIntervalId)
      syncIntervalId = window.setInterval(
        syncPlugins,
        SYNC_INTERVAL * 60 * 1000
      )
    } else {
      if (syncIntervalId) clearInterval(syncIntervalId)
      syncIntervalId = null
    }
  }

  const handleApiUrlChange = (value: string) => {
    setTempApiUrl(value)
    // Reset OAuth verification when URL changes
    store.oauthVerified = false
    store.accessToken = null
  
  }

  const saveApiUrl = async () => {
    store.apiUrl = tempApiUrl()
    // Check OAuth settings when URL is saved
    const verified = await checkOAuthSettings()
    store.oauthVerified = verified

  }

  return (
    <>
      <Header tag={HeaderTags.H2}>Backend API URL</Header>
      <Space />
      <Header tag={HeaderTags.H3}>
        The URL of the sync backend. Don't change this unless you know what
        you're doing.
      </Header>
      <Space />
      <Flex>
        <TextBox
          value={tempApiUrl()}
          onInput={handleApiUrlChange}
          placeholder="Enter your sync backend URL (e.g. http://shelter.sync)"
        />
        <Button
          size={ButtonSizes.ICON}
          onClick={saveApiUrl}
          disabled={tempApiUrl() === store.apiUrl}
        >
          <IconAdd />
        </Button>
      </Flex>

      <Divider mt={true} mb={true} />

      <SwitchItem
        note="Automatically sync your plugins and settings every 15 minutes"
        value={store.autoSync}
        onChange={toggleAutoSync}
        disabled={!store.oauthVerified}
      >
        Automatically sync
      </SwitchItem>

      <Flex flexDirection="row" justifyContent="between" alignItems="center">
        <Button
          size={ButtonSizes.MEDIUM}
          onClick={handleAuthorize}
          disabled={isAuthorizing() || syncing() || isLoading() || !store.oauthVerified}
          look={ButtonLooks.FILLED}
          color={ButtonColors.GREEN}
        >
          {isAuthorizing() ? 'Authorizing...' : store.oauthVerified ? 'Unauthorize' : 'Authorize'}
        </Button>

<Space />

        <Button
          size={ButtonSizes.MEDIUM}
          onClick={handleSync}
          disabled={syncing() || isLoading() || !store.oauthVerified}
        >
          {syncing() ? 'Syncing...' : 'Sync Now'}
        </Button>

<Space />

        <Button
          size={ButtonSizes.MEDIUM}
          onClick={handlePull}
          disabled={syncing() || isLoading() || !store.oauthVerified}
        >
          {isLoading() ? 'Pulling...' : 'Pull Data'}
        </Button>
        
        <Space />

        <Button
          size={ButtonSizes.MEDIUM}
          onClick={handleDelete}
          disabled={syncing() || isLoading() || !store.oauthVerified}
          color={ButtonColors.RED}
          look={ButtonLooks.OUTLINED}
        >
          {isLoading() ? 'Deleting...' : 'Delete Data'}
        </Button>
      </Flex>
    </>
  )
}

export async function onLoad() {
  if (store.autoSync && store.oauthVerified) {
    syncIntervalId = window.setInterval(syncPlugins, SYNC_INTERVAL * 60 * 1000)
  }
  
  // Check OAuth settings on load
  const verified = await checkOAuthSettings()
  store.oauthVerified = verified
}

export function onUnload() {
  if (syncIntervalId) {
    clearInterval(syncIntervalId)
    syncIntervalId = null
  }
}
