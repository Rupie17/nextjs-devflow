import { z } from 'zod'

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  // below is saying each title must have between 1 and 3 tags, which can be between 1 and 15 characters.
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
})
