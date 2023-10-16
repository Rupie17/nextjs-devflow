'use server'

import Question from '@/database/question.model'
import { connectToDataBase } from '../mongoose'
import Tag from '@/database/tag.model'
import { CreateQuestionParams, GetQuestionsParams } from './shared.types'
import User from '@/database/user.model'
import { revalidatePath } from 'next/cache'

// create server actions as typical JS functions that need to be exported.

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDataBase()
    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 })

    return { questions }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDataBase()
    // path param is the location of the page we are redirecting to.
    const { title, content, tags, author, path } = params

    // create the question
    const question = await Question.create({
      title,
      content,
      author,
    })

    const tagDocuments = []

    // creat the tags or get them if they exist already.
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        // filter query
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        // insert.  If it exists it updates by pushing the ID of a q into he question array field. otherwise create new.
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        // options - upsert says if no doc is found for a tag, create a new one.  new says return the new or updated doc.
        { upsert: true, new: true }
      )

      tagDocuments.push(existingTag._id)
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { each: tagDocuments } },
    })

    // does a reload on the page automatically
    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}
