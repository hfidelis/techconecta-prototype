export interface Comment {
  postId: number
  commentId: number
  creator: Creator
  createdAt: string
  content: string
}

interface Creator {
  userId: number
  username: string
  email: string
}
