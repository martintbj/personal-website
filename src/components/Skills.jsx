import React from 'react'
import { Code2, Database, Wrench, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SkillBar = ({ skill, level, delay }) => {
  const [ref, isVisible] = useScrollAnimation()
  
  const levelConfig = {
    'Expert': { width: '100%', color: 'from-green-500 to-emerald-400', badge: 'bg-green-500/20 text-green-400 border-green-500' },
    'Advanced': { width: '75%', color: 'from-blue-500 to-cyan-400', badge: 'bg-blue-500/20 text-blue-400 border-blue-500' },
    'Intermediate': { width: '50%', color: 'from-yellow-500 to-orange-400', badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500' },
    'Beginner': { width: '25%', color: 'from-slate-500 to-slate-400', badge: 'bg-slate-500/20 text-slate-400 border-slate-500' }
  }
  
  const config = levelConfig[level]
  
  return (
    <div ref={ref} className="mb-4" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{skill}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${config.badge}`}>
          {level}
        </span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${config.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? config.width : '0%' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'HTML/CSS', level: 'Expert' },
        { name: 'C++', level: 'Advanced' },
        { name: 'Java', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'TailwindCSS', level: 'Expert' },
        { name: 'Shopify Liquid', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Expert' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express', level: 'Advanced' },
        { name: 'MySQL', level: 'Expert' },
        { name: 'Firebase', level: 'Advanced' },
      ],
    },
    {
      title: 'Data & AI',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Data Analytics', level: 'Expert' },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'Chart.js', level: 'Advanced' },
        { name: 'D3.js', level: 'Intermediate' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git', level: 'Expert' },
        { name: 'Shopify', level: 'Expert' },
        { name: 'GA4', level: 'Advanced' },
        { name: 'Stripe', level: 'Advanced' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 overflow-hidden card-hover"
              >
                <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <SkillBar
                        key={i}
                        skill={skill.name}
                        level={skill.level}
                        delay={i * 100}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Education Section */}
        <div className="mt-16 bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Education</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">University of Houston</h4>
              <p className="text-primary-400 font-medium">B.S. in Computer Science</p>
              <p className="text-slate-400 text-sm">2022 - 2026</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">Lonestar Community College</h4>
              <p className="text-primary-400 font-medium">Summer Coursework</p>
              <p className="text-slate-400 text-sm">2022 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
