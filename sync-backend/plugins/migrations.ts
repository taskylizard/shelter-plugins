import { consola } from 'consola'
import { migrate } from 'drizzle-orm/d1/migrator'

export default defineNitroPlugin(async () => {
  if (import.meta.dev) return

  await migrate(useDrizzle(), {
    migrationsFolder: 'sync-backend/database/migrations'
  })
    .then(() => {
      consola
        .withTag('migrations')
        .withTag('d1')
        .success('Database migrations done')
    })
    .catch((err) => {
      consola
        .withTag('migrations')
        .withTag('d1')
        .error('Database migrations failed', err)
    })
})
