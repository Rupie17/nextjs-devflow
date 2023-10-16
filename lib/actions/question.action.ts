'use server'

import { connectToDataBase } from '../mongoose'

// create server actions as typical JS functions that need to be exported.

export async function createQuestion(params: any) {
  try {
    connectToDataBase()
  } catch (error) {}
}
