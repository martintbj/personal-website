import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'

const Hero = () => {
  const roles = ['Full Stack Developer', 'Data Analyst', 'Problem Solver', 'Web Developer']
  const typedText = useTypingEffect(roles, 100, 50, 2000)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-gradient">Martin Trujillo</span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 font-light h-12"
            variants={itemVariants}
          >
            <span className="text-gradient">{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.p>
          <motion.p 
            className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Aspiring developer building production-ready web apps and data-driven solutions.
            Specializing in end-to-end ownership across frontend, backend, and database design.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Martin_Trujillo_Resume.pdf"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center"
            variants={itemVariants}
          >
            <a
              href="https://github.com/martintbj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="http://www.linkedin.com/in/martintrujiber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:jtrunal1015@gmail.com"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-primary-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
