export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  authorId: number
  publishedAt: string
  tags: string[]
}

export interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
}

export type LoadingState =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}