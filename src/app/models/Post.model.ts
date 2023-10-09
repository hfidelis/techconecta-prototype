import { User } from "./User.model"

export interface Post {
  postId: number
  creator: User
  category: string
  createdAt: string
  title: string
  subtitle: string
  content: string
  postImage: string
  postViews: number
}
