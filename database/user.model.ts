import { Schema, models, model, Document } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  name: string
  username: string
  email: string
  password?: string
  bio?: string
  picture?: string
  location?: string
  portfolio?: string
  reputation?: number
  saved: Schema.Types.ObjectId[]
  joinDate: Date
}

// create a Schema
const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  bio: { type: String },
  picture: { type: String },
  location: { type: String },
  portfolio: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joinDate: { type: Date, default: Date.now },
})

// Create the model, check if it exists first, if not, create.
const User = models.User || model('User', UserSchema)

export default User
