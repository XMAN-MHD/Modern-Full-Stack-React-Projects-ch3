import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'

try {
  dotenv.config()

  await initDatabase()

  const PORT = process.env.PORT || 3000
  app.listen(PORT)
  console.info(`express server running on http://localhost:${PORT}`)
} catch (error) {
  console.error('error connecting to database:', error)
}
