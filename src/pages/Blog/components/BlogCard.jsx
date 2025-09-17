import React from "react"

import { Link } from "react-router-dom"

const BlogCard = ({ post }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const getReadingTime = (content) => {
        const wordsPerMinute = 200
        const wordCount = content.split(" ").length
        return Math.ceil(wordCount / wordsPerMinute)
    }

    return (
        <article className="group bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden">
            <Link to={`/blog/${post.id}`}>
                <div className="aspect-video overflow-hidden">
                    <img
                        src={post.image || `/placeholder.svg?height=240&width=400&query=${encodeURIComponent(post.title)}`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{getReadingTime(post.content)} min read</span>
                    </div>

                    <h2 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"> {post.title} </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img  src={post.author.avatar || `/placeholder.svg?height=32&width=32&query=avatar`} alt={post.author.name}   className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-sm font-medium text-card-foreground">{post.author.name}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-muted-foreground">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                            <span className="text-sm">{post.views}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogCard
