import React from 'react'
import { GraduationCap, Briefcase, Code } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm an aspiring full stack developer and data analyst pursuing a B.S. in Computer Science 
              at the University of Houston (graduating May 2026). I have hands-on experience shipping 
              production-ready web apps, data dashboards, and e-commerce platforms.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans end-to-end ownership across frontend, backend, and database design, 
              with a focus on data-driven decisions and business strategy. I've built multi-role platforms, 
              automated pharmacy analytics, and commercial sites that delivered measurable ROI.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm comfortable with Python, JavaScript, SQL, R, and C++, with a strong foundation in 
              compliance, user privacy, and agile collaboration.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <GraduationCap className="text-primary-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-slate-300">B.S. in Computer Science</p>
                  <p className="text-slate-400 text-sm">University of Houston | 2022-2026</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <Briefcase className="text-primary-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-slate-300">Web Developer at Stravx</p>
                  <p className="text-slate-400 text-sm">Remote | September 2024 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <Code className="text-primary-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                  <p className="text-slate-300">Full Stack Development</p>
                  <p className="text-slate-400 text-sm">Frontend • Backend • Data Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
