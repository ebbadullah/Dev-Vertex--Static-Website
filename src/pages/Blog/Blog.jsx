import React from "react"
import { Helmet } from "react-helmet"
import BlogList from "./components/BlogList"
import BlogSidebar from "./components/BlogSidebar"

const Blog = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Dev Vertex - Blog | Web Development Insights</title>
                <meta name="description" content="Explore our blog for insights, tutorials, and best practices for modern web development with the MERN stack." />
                <meta name="keywords" content="web development blog, MERN stack tutorials, development insights, Dev Vertex" />
            </Helmet>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Blog</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-balance leading-relaxed">
                        Insights, tutorials, and best practices for modern web development with the MERN stack
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <BlogList />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
