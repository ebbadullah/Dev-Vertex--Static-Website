import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./BlogCard";
import { fetchPostsSuccess } from "../../../redux/blog/blogSlice";

const BlogList = () => {
  const dispatch = useDispatch();
  const { posts, categories } = useSelector(state => state.blog);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const mockPosts = [
    { id: 1, title: "Building Scalable MERN Stack Applications: Best Practices and Architecture Patterns", excerpt: "Learn how to architect MERN stack applications that can handle millions of users with proper database design, caching strategies, and microservices patterns.", content: "Building scalable MERN stack applications requires careful consideration of architecture patterns, database design, and performance optimization. In this comprehensive guide, we'll explore the best practices for creating applications that can handle millions of users while maintaining excellent performance and reliability. We'll cover topics including database indexing, caching strategies, load balancing, microservices architecture, and deployment best practices. Whether you're building a startup MVP or an enterprise application, these patterns will help you create robust, scalable solutions.", category: "Development", publishedAt: "2024-01-15", author: { name: "Alex Johnson", avatar: "/developer-working.png" }, image: "/placeholder-aruwm.png", views: 1250, featured: true },
    { id: 2, title: "React Performance Optimization: Advanced Techniques for Lightning-Fast UIs", excerpt: "Discover advanced React optimization techniques including code splitting, memoization, virtual scrolling, and bundle optimization to create blazing-fast user interfaces.", content: "React performance optimization is crucial for creating smooth, responsive user interfaces. This article covers advanced techniques including React.memo, useMemo, useCallback, code splitting with React.lazy, virtual scrolling for large lists, bundle analysis and optimization, and server-side rendering strategies. We'll also explore performance monitoring tools and techniques to identify bottlenecks in your React applications.", category: "Technology", publishedAt: "2024-01-12", author: { name: "Sarah Chen", avatar: "/female-developer.png" }, image: "/react-performance-optimization.jpg", views: 980, featured: false },
    { id: 3, title: "MongoDB Schema Design Patterns for Modern Web Applications", excerpt: "Master MongoDB schema design with proven patterns for e-commerce, social media, and content management systems. Learn when to embed vs reference documents.", content: "Effective MongoDB schema design is fundamental to building performant applications. This guide covers essential design patterns including the subset pattern, computed pattern, bucket pattern, and outlier pattern. We'll explore when to embed documents versus using references, how to handle one-to-many and many-to-many relationships, and strategies for handling large datasets efficiently.", category: "Database", publishedAt: "2024-01-10", author: { name: "Michael Rodriguez", avatar: "/database-expert.png" }, image: "/placeholder-mziow.png", views: 756, featured: false },
    { id: 4, title: "Securing Your MERN Stack: Authentication, Authorization, and Best Practices", excerpt: "Comprehensive guide to securing MERN applications with JWT, OAuth, rate limiting, input validation, and protection against common security vulnerabilities.", content: "Security is paramount in modern web applications. This comprehensive guide covers implementing secure authentication with JWT tokens, OAuth integration, role-based authorization, input validation and sanitization, protection against XSS and CSRF attacks, rate limiting, and security headers. We'll also discuss secure deployment practices and monitoring for security threats.", category: "Security", publishedAt: "2024-01-08", author: { name: "Emily Davis", avatar: "/security-expert.png" }, image: "/web-application-security.png", views: 1100, featured: true },
    { id: 5, title: "Node.js Microservices: Building Distributed Systems with Express and Docker", excerpt: "Learn to build and deploy microservices architecture using Node.js, Express, Docker, and Kubernetes for scalable, maintainable applications.", content: "Microservices architecture offers scalability and maintainability benefits for complex applications. This guide covers designing microservices with Node.js and Express, containerization with Docker, orchestration with Kubernetes, service discovery, API gateways, inter-service communication, and monitoring distributed systems. We'll build a complete example application demonstrating these concepts.", category: "Architecture", publishedAt: "2024-01-05", author: { name: "David Thompson", avatar: "/architect-studio.png" }, image: "/microservices-architecture.png", views: 890, featured: false },
    { id: 6, title: "Modern CSS Techniques: Grid, Flexbox, and Custom Properties in 2024", excerpt: "Master modern CSS with advanced Grid layouts, Flexbox patterns, CSS custom properties, container queries, and the latest CSS features for responsive design.", content: "CSS has evolved significantly with powerful new features for modern web design. This article explores advanced CSS Grid techniques, Flexbox patterns, CSS custom properties for theming, container queries for component-based responsive design, CSS logical properties, and the latest CSS features like :has() selector and cascade layers. Perfect for developers looking to level up their CSS skills.", category: "Design", publishedAt: "2024-01-03", author: { name: "Lisa Wang", avatar: "/diverse-designers-brainstorming.png" }, image: "/modern-css-techniques.jpg", views: 670, featured: false }
  ];

  useEffect(() => { dispatch(fetchPostsSuccess(mockPosts)); }, [dispatch]);

  useEffect(() => {
    let filtered = posts;
    if (selectedCategory !== "All") filtered = filtered.filter(p => p.category === selectedCategory);
    if (searchTerm) filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const allCategories = ["All", ...categories];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
        <div className="flex flex-wrap gap-2">
          {allCategories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="text-muted-foreground">
        {searchTerm || selectedCategory !== "All" ? <p>Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}</p> : <p>Showing all {posts.length} articles</p>}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredPosts.map(post => <BlogCard key={post.id} post={post} />)}</div>
      ) : (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306m8 0V7a2 2 0 012 2v6.414l-1.293-1.293a1 1 0 00-1.414 0L12 17.414l-2.293-2.293a1 1 0 00-1.414 0L7 16.414V9a2 2 0 012-2h8a2 2 0 012 2v.306z" /></svg>
          <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
