import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDataBase = async () => {
  // prevents unknown field queries
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) return console.log('Missing MongoDB URL')

  if (isConnected) {
    return console.log('MongoDB is already connected')
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'Nextjs-devflow',
    })
    isConnected = true
    console.log('DB Connected')
  } catch (error) {
    console.log('Connection error...')
  }
}
