import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './sync-backend/database/schema.ts',
  out: './sync-backend/database/migrations'
})
