import { useState } from 'react'
import { blogPosts, BlogPost } from '../content/blog'
import './BlogWindow.css'

export default function BlogWindow() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  if (selectedPost) {
    return (
      <div className="blog-window">
        <button className="blog-back-button" onClick={() => setSelectedPost(null)}>
          ← Back to all posts
        </button>

        <article className="blog-post">
          <header className="blog-post-header">
            <h1 className="blog-post-title">{selectedPost.title}</h1>
            <div className="blog-post-meta">
              <time className="blog-post-date">{selectedPost.date}</time>
              <div className="blog-post-tags">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="blog-post-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="blog-post-content">
            {selectedPost.content.split('\n').map((line, index) => {
              // Simple markdown-like rendering
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="content-h1">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="content-h2">
                    {line.substring(3)}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="content-h3">
                    {line.substring(4)}
                  </h3>
                )
              }
              if (line.startsWith('---')) {
                return <hr key={index} className="content-hr" />
              }
              if (line.match(/^\d+\./)) {
                return (
                  <li key={index} className="content-li">
                    {line.substring(line.indexOf('.') + 1).trim()}
                  </li>
                )
              }
              if (line.startsWith('- **') || line.startsWith('* **')) {
                const text = line.substring(2)
                return (
                  <li key={index} className="content-li" dangerouslySetInnerHTML={{ __html: text }} />
                )
              }
              if (line.startsWith('*') && line.endsWith('*') && line.length > 2) {
                return (
                  <p key={index} className="content-p content-italic">
                    {line.substring(1, line.length - 1)}
                  </p>
                )
              }
              if (line.trim() === '') {
                return <div key={index} className="content-spacer" />
              }
              return (
                <p key={index} className="content-p" dangerouslySetInnerHTML={{ __html: line.replace(/`([^`]+)`/g, '<code>$1</code>') }} />
              )
            })}
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="blog-window">
      <div className="blog-intro">
        <h2>Blog</h2>
        <p>
          🚧 WIP
        </p>
      </div>

      <div className="blog-index">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card" onClick={() => setSelectedPost(post)}>
            <h3 className="blog-card-title">{post.title}</h3>
            <div className="blog-card-meta">
              <time className="blog-card-date">{post.date}</time>
              <div className="blog-card-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-card-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <button className="blog-card-read-more">Read more →</button>
          </article>
        ))}

        {blogPosts.length === 0 && (
          <p className="blog-empty">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}
