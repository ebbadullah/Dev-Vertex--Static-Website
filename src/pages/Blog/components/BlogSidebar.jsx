import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogSidebar = () => {
  const { posts, categories } = useSelector(state => state.blog);

  const recentPosts = [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, 5);
  const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);
  const formatDate = date => new Date(date).toLocaleDateString(undefined, { month: "short", day: "numeric" });

  return (
    <aside className="space-y-8">
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => {
            const count = posts.filter(p => p.category === category).length;
            return (
              <Link key={category} to={`/blog?category=${category}`} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors group">
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{category}</span>
                <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">{count}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block">
              <div className="flex space-x-3">
                <img src={post.image || `/placeholder.svg?height=60&width=80&query=${encodeURIComponent(post.title)}`} alt={post.title} className="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">{post.title}</h4>
                  <p className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, i) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">{post.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
        <p className="text-muted-foreground text-sm mb-4">Get the latest articles and insights delivered to your inbox.</p>
        <div className="space-y-3">
          <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm" />
          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">Subscribe</button>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
