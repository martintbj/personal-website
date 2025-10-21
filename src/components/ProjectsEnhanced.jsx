import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Database, ShoppingCart, Activity, Coffee, X, BookOpen, Code, TrendingUp, CheckCircle, Lightbulb, Target, AlertCircle } from 'lucide-react'
import { projectCaseStudies } from '../data/projectCaseStudies'

const ProjectsEnhanced = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    {
      title: 'AI Medical Imaging: SuriMed X-Ray Fracture Detection',
      organization: 'Baylor College of Medicine',
      year: '2025',
      description: 'Research exploring AI-assisted fracture screening for low-income areas. Multi-input DenseNet169 model aims to flag potential fractures for radiologist confirmation, reducing costs and improving healthcare access in underserved communities.',
      technologies: ['Python', 'DenseNet169', 'TensorFlow', 'OpenCV', 'Pandas'],
      icon: Activity,
      color: 'from-red-500 to-pink-500',
      github: 'https://github.com/martintbj/surimed',
      caseStudy: 'surimed',
    },
    {
      title: 'E-Commerce Business Development',
      organization: 'Independent',
      year: 'September 2024 - Present',
      description: 'Led cross-functional team to coordinate product launches, promotional campaigns, and inventory logistics. Built scalable e-commerce websites featuring secure checkout, SEO optimization, user management, and real-time analytics.',
      technologies: ['Shopify', 'Stripe', 'Google Analytics', 'Meta Ads', 'HTML/CSS', 'Klaviyo', 'Hotjar'],
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      link: null,
    },
    {
      title: 'Museum Management Platform',
      organization: 'COSC3380 Databases',
      year: '2024',
      description: 'Full-stack museum management platform with secure multi-role access (Admin, Curator, Gift Shop, Customer). Engineered custom SQL triggers to detect fraud cases. Implemented role-specific dashboards with real-time data editing.',
      technologies: ['React.js', 'Express.js', 'MySQL', 'Railway', 'Chart.js', 'REST API'],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/martintbj/Museum-Database',
      caseStudy: 'museum-database',
    },
    {
      title: 'Yumi Tomball Cafe',
      organization: 'Independent',
      year: '2024',
      description: 'Built clean, mobile-first website with digital menu and contact info. Multi-page structure using HTML, CSS, and vanilla JavaScript. Drove 200%+ increase in monthly online inquiries and pick-up orders.',
      technologies: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      icon: Coffee,
      color: 'from-orange-500 to-yellow-500',
      github: 'https://github.com/martintbj/yumi-website',
      caseStudy: 'yumi-website',
    },
    {
      title: 'Pharmacy Data Analytics Dashboard',
      organization: 'Memorial Hermann Pharmacy',
      year: '2023',
      description: 'Developed automated data parsing and dynamic graph generation system, boosting monthly pharmacy reporting efficiency by 150%. Designed interactive analytics web tool for visualizing pharmacy trends and prescription insights.',
      technologies: ['Python', 'MySQL', 'JavaScript', 'D3.js'],
      icon: Activity,
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const openCaseStudy = (project) => {
    if (project.caseStudy && projectCaseStudies[project.caseStudy]) {
      setSelectedProject({ ...project, study: projectCaseStudies[project.caseStudy] })
      setActiveTab('overview')
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            A selection of projects showcasing my full-stack development and data analytics capabilities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${project.color} rounded-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                          aria-label="GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                          aria-label="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.caseStudy && (
                        <button
                          onClick={() => openCaseStudy(project)}
                          className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                          aria-label="View Case Study"
                        >
                          <BookOpen size={20} />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <span>{project.organization}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 text-primary-400 text-xs rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-2xl max-w-6xl w-full my-8 border border-slate-700 max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-start z-10">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-slate-400">{selectedProject.organization} • {selectedProject.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-slate-400" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="border-b border-slate-700 px-6 bg-slate-800/50">
                  <div className="flex gap-4">
                    {['overview', 'technical', 'metrics', 'lessons'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-3 font-medium capitalize transition-colors relative ${
                          activeTab === tab
                            ? 'text-primary-400'
                            : 'text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'overview' && selectedProject.study && (
                        <div className="space-y-6">
                          {/* Problem & Solution */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                              <div className="flex items-center gap-2 mb-3">
                                <AlertCircle className="text-red-400" size={24} />
                                <h3 className="text-xl font-bold text-white">Problem</h3>
                              </div>
                              <p className="text-slate-300 leading-relaxed">{selectedProject.study.overview.problem}</p>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                              <div className="flex items-center gap-2 mb-3">
                                <Target className="text-green-400" size={24} />
                                <h3 className="text-xl font-bold text-white">Solution</h3>
                              </div>
                              <p className="text-slate-300 leading-relaxed">{selectedProject.study.overview.solution}</p>
                            </div>
                          </div>

                          {/* Impact */}
                          <div className="bg-gradient-to-br from-primary-600/10 to-cyan-600/10 p-6 rounded-lg border border-primary-500/30">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <TrendingUp className="text-primary-400" size={24} />
                              Impact & Results
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3">
                              {selectedProject.study.overview.impact.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300">
                                  <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeTab === 'technical' && selectedProject.study && (
                        <div className="space-y-6">
                          {/* Architecture */}
                          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">Architecture</h3>
                            <p className="text-slate-300">{selectedProject.study.technicalDetails.architecture}</p>
                          </div>

                          {/* Challenges */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">Technical Challenges</h3>
                            <div className="space-y-4">
                              {selectedProject.study.technicalDetails.challenges.map((challenge, i) => (
                                <div key={i} className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
                                  <h4 className="text-lg font-semibold text-primary-400 mb-2">{challenge.title}</h4>
                                  <p className="text-slate-400 text-sm mb-2"><strong>Problem:</strong> {challenge.problem}</p>
                                  <p className="text-slate-300 text-sm"><strong>Solution:</strong> {challenge.solution}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                            <div className="grid md:grid-cols-2 gap-3">
                              {selectedProject.study.technicalDetails.keyFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                                  <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                                  <span className="text-slate-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Code Highlights */}
                          {selectedProject.study.codeHighlights && (
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4">Code Highlights</h3>
                              <div className="space-y-4">
                                {selectedProject.study.codeHighlights.map((highlight, i) => (
                                  <div key={i} className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                                    <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                                      <p className="text-sm font-medium text-slate-300">{highlight.title}</p>
                                    </div>
                                    <pre className="p-4 overflow-x-auto">
                                      <code className="text-sm text-slate-300">{highlight.code}</code>
                                    </pre>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {activeTab === 'metrics' && selectedProject.study && (
                        <div className="space-y-6">
                          {/* Performance Metrics */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {selectedProject.study.metrics.performance.map((metric, i) => (
                                <div key={i} className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
                                  <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
                                  <p className="text-3xl font-bold text-primary-400">{metric.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Business Metrics */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">Business Impact</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                              {selectedProject.study.metrics.business.map((metric, i) => (
                                <div key={i} className="bg-gradient-to-br from-primary-600/10 to-cyan-600/10 p-5 rounded-lg border border-primary-500/30">
                                  <p className="text-slate-300 text-sm mb-1">{metric.label}</p>
                                  <p className="text-3xl font-bold text-white">{metric.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'lessons' && selectedProject.study && (
                        <div className="space-y-6">
                          {/* Lessons Learned */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <Lightbulb className="text-yellow-400" size={24} />
                              Lessons Learned
                            </h3>
                            <div className="space-y-3">
                              {selectedProject.study.lessonsLearned.map((lesson, i) => (
                                <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                  <span className="text-primary-400 font-bold text-lg">{i + 1}.</span>
                                  <p className="text-slate-300">{lesson}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Future Improvements */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">Future Improvements</h3>
                            <div className="grid md:grid-cols-2 gap-3">
                              {selectedProject.study.futureImprovements.map((improvement, i) => (
                                <div key={i} className="flex items-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                                  <Code className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                                  <span className="text-slate-300 text-sm">{improvement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsEnhanced
