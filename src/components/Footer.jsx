import React from 'react'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm flex items-center gap-2">
            <span>© {currentYear} Martin Trujillo.</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/martintbj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="http://www.linkedin.com/in/martintrujiber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jtrunal1015@gmail.com"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
