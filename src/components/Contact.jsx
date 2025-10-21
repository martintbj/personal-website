import React, { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, X } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xkgqaboa', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setShowModal(true)
        form.reset()
        setTimeout(() => {
          setStatus('')
          setShowModal(false)
        }, 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900/50 relative">
      {/* Success Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-primary-500 shadow-2xl shadow-primary-500/20 animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/20 rounded-full">
                  <CheckCircle className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-slate-300 mb-6">
              Thanks for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:jtrunal1015@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                    <Mail size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">jtrunal1015@gmail.com</p>
                  </div>
                </a>

                <a
                  href="http://www.linkedin.com/in/martintrujiber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                    <Linkedin size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/martintrujiber</p>
                  </div>
                </a>

                <a
                  href="https://github.com/martintbj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                    <Github size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="font-medium">github.com/martintbj</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <MapPin size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Houston, TX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600/20 to-cyan-600/20 p-6 rounded-xl border border-primary-500/30">
              <h4 className="text-lg font-semibold mb-2 text-white">Currently Available</h4>
              <p className="text-slate-300 text-sm">
                I'm actively seeking full time opportunities in full stack development and data analytics. 
                Open to remote, hybrid, and in person positions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
