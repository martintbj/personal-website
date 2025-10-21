import React, { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
