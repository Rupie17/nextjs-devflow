import { Schema, models, model, Document } from 'mongoose'

export interface IQuestion extends Document {
  title: string
  content: string
  // tags will be another model in the DB so connect out to that.
  tags: Schema.Types.ObjectId[]
  views: number
  upvotes: Schema.Types.ObjectId[]
  downvotes: Schema.Types.ObjectId[]
  author: Schema.Types.ObjectId
  answers: Schema.Types.ObjectId[]
  createdAt: Date
}

// create a Schema
const QuestionsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  createdAt: { type: Date, default: Date.now },
})

// Create the model, check if it exists first, if not, create.
const Question = models.Question || model('Question', QuestionsSchema)

export default Question
