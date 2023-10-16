'use server'

import User from '@/database/user.model'
import { connectToDataBase } from '../mongoose'

export async function getUserById(params: any) {
  try {
    connectToDataBase()

    const { userId } = params
    // find user by clerk id
    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}
