import React from 'react'
import { ExternalLink, Github, Database, ShoppingCart, Activity, Coffee } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI Medical Imaging: SuriMed X-Ray Fracture Detection',
      organization: 'Baylor College of Medicine',
      year: '2025',
      description: 'AI model that classifies X-ray scans as fracture vs non-fracture to support clinician triage. Contributing to data preprocessing and model evaluation to improve sensitivity and specificity across diverse patient scans.',
      technologies: ['Python', 'YoloV5', 'TensorFlow', 'OpenCV'],
      icon: Activity,
      color: 'from-red-500 to-pink-500',
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
    },
    {
      title: 'Yumi Tomball Cafe',
      organization: 'Independent',
      year: '2024',
      description: 'Built interactive digital menu with integrated contact/location info and mobile-first UI/UX. Drove 200%+ increase in monthly online inquiries and pick-up orders. Website sold to new owners upon business acquisition.',
      technologies: ['HTML/CSS', 'JavaScript', 'React.js', 'Firebase', 'Google Maps API'],
      icon: Coffee,
      color: 'from-orange-500 to-yellow-500',
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

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing my full-stack development and data analytics capabilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 overflow-hidden card-hover group"
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
                        >
                          <ExternalLink size={20} />
                        </a>
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
