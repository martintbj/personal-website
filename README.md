<div align="center">

# Martin Trujillo | Portfolio

[![Deploy Status](https://github.com/martintbj/personal-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/martintbj/personal-website/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)

**A modern, responsive portfolio website showcasing full-stack development and data analytics expertise**

[View Live Site](https://martintbj.github.io/personal-website/) • [Report Bug](https://github.com/martintbj/personal-website/issues) • [Request Feature](https://github.com/martintbj/personal-website/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)

---

## Overview

This portfolio website serves as a comprehensive showcase of my professional experience, technical skills, and project work in full-stack development and data analytics. Built with modern web technologies, it features a clean, responsive design with smooth animations and an intuitive user experience.

### Key Highlights

- **Responsive Design** — Seamless experience across all devices and screen sizes
- **Modern UI/UX** — Clean, professional interface with smooth animations and transitions
- **Performance Optimized** — Fast loading times with Vite's optimized build process
- **SEO Ready** — Structured metadata and semantic HTML for better discoverability
- **Accessible** — WCAG compliant with proper ARIA labels and keyboard navigation

---

## Features

| Feature | Description |
|---------|-------------|
| **Hero Section** | Dynamic typing effect with Framer Motion animations and call-to-action buttons |
| **About** | Professional background, education, and career objectives |
| **Experience Timeline** | Interactive timeline visualization of work history |
| **Project Showcase** | Featured projects with detailed case studies and GitHub links |
| **Case Studies** | In-depth project breakdowns with tabs for Overview, Technical, Metrics, and Lessons |
| **Blog Section** | Technical articles about projects with Markdown rendering |
| **Skills Matrix** | Comprehensive display of technical competencies by category |
| **Contact Form** | Integrated Formspree contact form with validation and success modal |
| **Advanced Animations** | Framer Motion animations throughout with smooth transitions |
| **Smooth Scrolling** | Enhanced navigation with scroll progress indicator |
| **Dark Theme** | Modern dark mode design with cyan/blue accent colors |

---

## Tech Stack

### Core Technologies

- **[React 18](https://reactjs.org/)** — Modern UI library with hooks and functional components
- **[Vite](https://vitejs.dev/)** — Next-generation frontend build tool for fast development
- **[TailwindCSS](https://tailwindcss.com/)** — Utility-first CSS framework for rapid styling
- **[Lucide React](https://lucide.dev/)** — Beautiful, consistent icon library

### Additional Tools

- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animation library
- **[React Markdown](https://github.com/remarkjs/react-markdown)** — Markdown rendering for blog posts
- **PostCSS** — CSS processing and optimization
- **Autoprefixer** — Automatic vendor prefix handling
- **Formspree** — Contact form backend integration
- **GitHub Actions** — CI/CD pipeline for automated deployment

---

## Featured Projects

### SuriMed - AI-Assisted Fracture Screening
Research project at Baylor College of Medicine exploring AI-powered fracture detection for underserved communities. Uses multi-input DenseNet169 to analyze three X-ray views.

**Tech:** Python, DenseNet169, TensorFlow, OpenCV, Pandas

[View on GitHub](https://github.com/martintbj/surimed)

### Museum Database Management System
Academic full-stack project for COSC3380 Databases course. Features role-based access control, data visualization, and complex SQL queries.

**Tech:** React, Express.js, MySQL, Chart.js, Railway

[View on GitHub](https://github.com/martintbj/Museum-Database)

### Yumi Tomball Cafe Website
Mobile-first website for local cafe with digital menu and contact information. Drove 200%+ increase in online inquiries.

**Tech:** HTML, CSS, JavaScript

[View on GitHub](https://github.com/martintbj/yumi-website)

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/martintbj/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:5173`

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

---

## Project Structure

```
personal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── resume.pdf              # Downloadable resume
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── Blog.jsx            # Blog section with articles
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Landing hero section with animations
│   │   ├── Navigation.jsx      # Main navigation bar
│   │   ├── ProjectsEnhanced.jsx # Project showcase with case studies
│   │   ├── Skills.jsx          # Skills matrix
│   │   ├── ScrollProgress.jsx  # Scroll indicator
│   │   └── BackToTop.jsx       # Back to top button
│   ├── data/
│   │   ├── blogPosts.js        # Blog article content
│   │   └── projectCaseStudies.js # Detailed case study data
│   ├── hooks/
│   │   ├── useTypingEffect.js  # Typing animation hook
│   │   └── useScrollAnimation.js # Scroll animation hook
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # TailwindCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

---

## Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment via GitHub Actions:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Navigate to repository **Settings** → **Pages**
   - Set **Source** to **GitHub Actions**

3. **Automatic Deployment**
   - Every push to `main` triggers the deployment workflow
   - Site will be live at: `https://martintbj.github.io/personal-website/`

### Alternative Platforms

| Platform | Deployment Method | Documentation |
|----------|------------------|---------------|
| **Vercel** | Connect GitHub repo for automatic deployments | [Vercel Docs](https://vercel.com/docs) |
| **Netlify** | Drag & drop `dist` folder or connect repo | [Netlify Docs](https://docs.netlify.com/) |
| **Railway** | Connect GitHub repository | [Railway Docs](https://docs.railway.app/) |

---

## Customization

### Personalizing Content

| Component | File Path | Purpose |
|-----------|-----------|---------|
| **Hero** | `src/components/Hero.jsx` | Name, roles, introduction |
| **About** | `src/components/About.jsx` | Background, education |
| **Experience** | `src/components/Experience.jsx` | Work history |
| **Projects** | `src/components/ProjectsEnhanced.jsx` | Portfolio projects |
| **Blog** | `src/data/blogPosts.js` | Blog articles and content |
| **Case Studies** | `src/data/projectCaseStudies.js` | Detailed project breakdowns |
| **Skills** | `src/components/Skills.jsx` | Technical skills |
| **Contact** | `src/components/Contact.jsx` | Contact information |

### Adding Blog Posts

Edit `src/data/blogPosts.js` to add new articles:

```javascript
{
  id: 4,
  title: 'Your Article Title',
  slug: 'article-slug',
  date: '2024-12-15',
  readTime: '5 min read',
  category: 'Full Stack',
  excerpt: 'Brief description...',
  tags: ['React', 'Node.js'],
  content: `
# Your Article Content
Write in Markdown format...
  `
}
```

### Adding Case Studies

Edit `src/data/projectCaseStudies.js` and add the case study slug to your project in `ProjectsEnhanced.jsx`:

```javascript
{
  title: 'Your Project',
  caseStudy: 'your-project-slug', // Links to case study
  // ... other fields
}
```

### Updating Social Links

Social links appear in multiple components. Update these URLs:

```javascript
// src/components/Hero.jsx, Contact.jsx, Footer.jsx
GitHub: "https://github.com/martintbj"
LinkedIn: "http://www.linkedin.com/in/martintrujiber"
Email: "jtrunal1015@gmail.com"
```

### Theme Customization

Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize accent colors
      }
    }
  }
}
```

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Contact

<div align="center">

**Martin Trujillo**

Full Stack Developer | Data Analyst

[![GitHub](https://img.shields.io/badge/GitHub-martintbj-181717?logo=github)](https://github.com/martintbj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-martintrujiber-0A66C2?logo=linkedin)](http://www.linkedin.com/in/martintrujiber)
[![Email](https://img.shields.io/badge/Email-jtrunal1015%40gmail.com-EA4335?logo=gmail)](mailto:jtrunal1015@gmail.com)

</div>

---

<div align="center">

**[⬆ Back to Top](#martin-trujillo--portfolio)**

Made with React & TailwindCSS

</div>