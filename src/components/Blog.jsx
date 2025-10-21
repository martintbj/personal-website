import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowRight, X } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import ReactMarkdown from 'react-markdown'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Technical articles, project breakdowns, and lessons learned from building real-world applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-cyan-600/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag className="text-primary-400/30" size={64} />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-primary-400 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-start z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedPost.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 prose prose-invert prose-slate max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                    p: ({node, ...props}) => <p className="text-slate-300 mb-4 leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-2" {...props} />,
                    code: ({node, inline, ...props}) => 
                      inline 
                        ? <code className="bg-slate-900 text-primary-400 px-2 py-1 rounded text-sm" {...props} />
                        : <code className="block bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                    a: ({node, ...props}) => <a className="text-primary-400 hover:text-primary-300 underline" {...props} />,
                    table: ({node, ...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                    th: ({node, ...props}) => <th className="border border-slate-700 bg-slate-900 px-4 py-2 text-left text-white" {...props} />,
                    td: ({node, ...props}) => <td className="border border-slate-700 px-4 py-2 text-slate-300" {...props} />,
                  }}
                >
                  {selectedPost.content}
                </ReactMarkdown>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-700">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-primary-400 text-sm rounded-full border border-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Blog
