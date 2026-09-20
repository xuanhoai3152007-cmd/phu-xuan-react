import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../constants'
import type { LoadingState, Post } from '../../types'

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<LoadingState>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadPosts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/posts`)

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data: Post[] = await response.json()

        if (cancelled) return

        setPosts(data)
        setStatus('success')
      } catch (err) {
        if (cancelled) return

        setError(err instanceof Error ? err.message : 'Không thể tải dữ liệu')
        setStatus('error')
      }
    }

    loadPosts()

    return () => {
      cancelled = true
    }
  }, [])

  if (status === 'loading') {
    return <p>Đang tải bài viết...</p>
  }

  if (status === 'error') {
    return (
      <p style={{ color: 'red' }}>
        ⚠ Không thể tải dữ liệu: {error}
      </p>
    )
  }

  return (
    <div>
      <h2>Danh sách bài viết</h2>

      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: '2rem' }}>
          <h3>{post.title}</h3>

          <p>{post.excerpt}</p>

          <small>
            Ngày đăng: {post.publishedAt}
          </small>

          <div style={{ marginTop: '0.5rem' }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{ marginRight: '0.5rem' }}>
                #{tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}