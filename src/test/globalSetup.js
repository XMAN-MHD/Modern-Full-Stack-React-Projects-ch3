import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  // 1. Create a new in-memory MongoDB server with the same version as your Docker MongoDB
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '6.0.4', // Match your Docker MongoDB version
    },
  })

  // 2. Store the instance globally so Jest can access it in teardown
  global.__MONGOINSTANCE = instance

  // 3. Set the DATABASE_URL environment variable for your tests to use
  process.env.DATABASE_URL = instance.getUri()
}
