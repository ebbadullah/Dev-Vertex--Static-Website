import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPost } from "../../redux/blog/blogSlice";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, currentPost } = useSelector(state => state.blog);

  useEffect(() => {
    const post = posts.find(p => p.id === Number.parseInt(id));
    if (post) dispatch(setCurrentPost(post));
  }, [id, posts, dispatch]);

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Helmet>
          <title>Post Not Found | Dev Vertex Blog</title>
          <meta name="description" content="The blog post you're looking for could not be found." />
        </Helmet>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80 underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = d => new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const getReadingTime = c => Math.ceil(c.split(" ").length / 200);
  const relatedPosts = posts.filter(p => p.category === currentPost.category && p.id !== currentPost.id).slice(0, 3);
  
  // Extract first 160 characters of content for meta description
  const getMetaDescription = () => {
    const plainText = currentPost.content.replace(/<[^>]+>/g, '');
    return plainText.substring(0, 160) + (plainText.length > 160 ? '...' : '');
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{currentPost.title} | Dev Vertex Blog</title>
        <meta name="description" content={getMetaDescription()} />
        <meta name="keywords" content={`${currentPost.category}, web development, blog, Dev Vertex`} />
      </Helmet>
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><span>/</span></li>
              <li className="text-foreground">{currentPost.title}</li>
            </ol>
          </nav>

          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{currentPost.category}</span>
              <span>{formatDate(currentPost.publishedAt)}</span>
              <span>{getReadingTime(currentPost.content)} min read</span>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                <span>{currentPost.views} views</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">{currentPost.title}</h1>
            <div className="flex items-center space-x-4">
              <img src={currentPost.author.avatar || `/placeholder.svg?height=48&width=48&query=avatar`} alt={currentPost.author.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-foreground">{currentPost.author.name}</div>
                <div className="text-sm text-muted-foreground">Author</div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <img src={currentPost.image || `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(currentPost.title)}`} alt={currentPost.title} className="w-full h-96 object-cover rounded-xl shadow-lg" />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">{currentPost.excerpt}</div>
            <div className="text-foreground leading-relaxed space-y-6">{currentPost.content.split("\n\n").map((p, i) => <p key={i} className="text-lg leading-relaxed">{p}</p>)}</div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></button>
                  <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></button>
                  <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg></button>
                </div>
              </div>
              <Link to="/blog" className="text-primary hover:text-primary/80 font-semibold underline">Back to Blog</Link>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image || `/placeholder.svg?height=200&width=350&query=${encodeURIComponent(post.title)}`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
