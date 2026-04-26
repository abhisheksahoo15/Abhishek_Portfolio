import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from './BlogPage';

const fullContent: Record<string, string> = {
  'future-of-ai-interfaces': `
Artificial intelligence is no longer just a backend workhorse. It is rapidly becoming the connective tissue of our digital interfaces — shaping how products look, feel, and respond to users.

## The Shift from Static to Adaptive UI

Traditional UIs are rigid. They display what developers code, regardless of who's in front of the screen. AI changes this entirely. Interfaces powered by machine learning can now adapt layouts, rewrite copy, and even restructure entire navigation trees based on user behavior.

## Context-Aware Design

The next wave of products won't just be "personalized" — they'll be *situationally aware*. An app might recognize that you're in a hurry based on your input velocity and simplify its UI in real time. Night mode isn't triggered by a clock anymore; it's triggered by ambient light sensors cross-referenced with your calendar.

## The Role of the Designer

Designers are no longer just crafting pixels — they're designing *systems that design themselves*. The craft shifts toward building robust constraint sets, meaningful feedback loops, and trust frameworks that make AI decisions feel natural rather than jarring.

The future of AI interface design belongs to those who can think like engineers and feel like artists simultaneously.
  `,
  'building-getsetai': `
GetsetAi started as a simple idea: what if learning AI tools felt as exciting as using them?

## The Problem

Most AI education platforms are dry, text-heavy, and built for academics. They miss the energy of actually *building* something. I wanted a platform that felt native to the GenZ mindset — fast, visual, community-driven, and always online.

## The Build

We started with React Native and Expo for cross-platform reach. The dashboard was built to render course content alongside live sessions, with a WebSocket layer for real-time instructor interaction. Azure was chosen for cloud hosting given its enterprise-grade reliability for education workloads.

## What We Learned

Building GetsetAi taught me that good products are discovered, not designed upfront. We shipped early, gathered feedback in real time, and iterated weekly. The community became a co-creator of the product itself.
  `,
  'react-performance-tips': `
React is fast by default — until it isn't. Here are the patterns I use to keep production UIs at a silky 60fps.

## 1. Component Virtualization

If you're rendering more than 50 items in a list, you're probably tanking performance. Libraries like \`react-window\` and \`tanstack/virtual\` can render only the visible portion of large lists, reducing DOM nodes by over 90%.

## 2. Memoization That Actually Matters

\`useMemo\` and \`useCallback\` are not silver bullets. Overusing them adds memory overhead with zero gain. The rule: memoize only when the computation is expensive OR when referential equality breaks a child's \`React.memo\` optimization.

## 3. Framer Motion + will-change

Animations are GPU-accelerated when you use \`transform\` and \`opacity\`. Adding \`will-change: transform\` as a CSS hint before an animation begins can eliminate the initial jank frame entirely.

## 4. Code Splitting with Lazy

Every route that isn't the landing page should be lazy-loaded. \`React.lazy\` + \`Suspense\` gets this done in two lines and can cut your initial bundle in half.

Combine these patterns and you'll have a noticeably faster app — one that users feel even if they can't describe why.
  `
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const content = fullContent[slug ?? ''] ?? '';

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <Link to="/blog" className="text-cyan-neon font-bold hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-cyan-neon transition-colors mb-10 font-bold text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>

          <span className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20 mb-6 inline-block">
            {post.tag}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium mb-12 pb-8 border-b border-gray-200 dark:border-white/10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            <span className="text-gradient-cyan-magenta font-bold">by Abhishek Sahoo</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.split('\n').map((para, i) => {
              if (para.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{para.replace('## ', '')}</h2>;
              }
              if (para.trim() === '') return <br key={i} />;
              return <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{para}</p>;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;
