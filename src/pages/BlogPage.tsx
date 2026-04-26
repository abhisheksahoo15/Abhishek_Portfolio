import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-ai-interfaces',
    title: 'The Future of AI Interface Design',
    excerpt: 'Exploring how generative AI is reshaping the way we design and build digital products — from adaptive layouts to context-aware experiences.',
    date: 'April 18, 2026',
    readTime: '5 min read',
    tag: 'AI / Design',
    gradient: 'from-cyan-neon/20 to-magenta-neon/20',
  },
  {
    id: 2,
    slug: 'building-getsetai',
    title: 'Building Getsetai: From Idea to Innovation Lab',
    excerpt: 'The story behind building a GenZ-first AI innovation platform from the ground up — the decisions, challenges, and breakthroughs along the way.',
    date: 'March 29, 2026',
    readTime: '7 min read',
    tag: 'Startup',
    gradient: 'from-magenta-neon/20 to-cyan-neon/20',
  },
  {
    id: 3,
    slug: 'react-performance-tips',
    title: 'React Performance: Beyond the Basics',
    excerpt: 'Advanced patterns I use to achieve silky 60fps UIs — virtualization, memoization strategies, and subtle animation optimizations.',
    date: 'February 12, 2026',
    readTime: '6 min read',
    tag: 'React',
    gradient: 'from-cyan-neon/20 to-blue-500/20',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-magenta-neon/30 bg-magenta-neon/10 mb-6">
            <Tag className="w-4 h-4 text-magenta-neon" />
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">BLOGS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Thoughts &amp; Insights<span className="text-magenta-neon">.</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
            Writing about AI, product building, and the craft of high-performance software. Published straight from the lab.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className={`group ai-glass-panel rounded-[2rem] p-8 relative overflow-hidden cursor-pointer`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 z-10 relative">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20 w-fit">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-neon group-hover:to-magenta-neon transition-all duration-300 z-10 relative">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-6 z-10 relative">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-neon font-bold text-sm group-hover:gap-4 transition-all duration-300 z-10 relative">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export { blogPosts };
export default BlogPage;
