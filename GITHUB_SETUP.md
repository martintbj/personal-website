# GitHub Setup Guide

## ✅ Completed Steps

1. ✓ Initialized Git repository
2. ✓ Updated README with accurate contact information
3. ✓ Added GitHub Actions workflow for automatic deployment
4. ✓ Configured Vite for GitHub Pages
5. ✓ Created initial commit

## 🚀 Next Steps to Connect to GitHub

### 1. Create GitHub Repository

Go to https://github.com/new and create a new repository:
- **Repository name**: `personal-website`
- **Description**: Personal portfolio website showcasing full-stack development and data analytics projects
- **Visibility**: Public
- **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Connect Local Repository to GitHub

After creating the repository, run these commands:

```bash
git branch -M main
git remote add origin https://github.com/martintbj/personal-website.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Your site will automatically deploy on every push to `main`
5. Your site will be available at: `https://martintbj.github.io/personal-website/`

### 4. Update Base URL (if needed)

If your repository name is different from `personal-website`, update `vite.config.js`:

```javascript
base: '/your-repo-name/', // Replace with actual repo name
```

## 📋 Additional Recommendations

### Add More GitHub Links to Projects

Currently only the Museum Database project has a GitHub link. Consider:

1. **Creating repositories** for other projects:
   - E-Commerce Business Development
   - Yumi Tomball Cafe
   - Pharmacy Data Analytics Dashboard

2. **Update** `src/components/Projects.jsx` to add GitHub links:
   ```javascript
   github: 'https://github.com/martintbj/project-name'
   ```

### Repository Topics

Add topics to your GitHub repository for better discoverability:
- `portfolio`
- `react`
- `vite`
- `tailwindcss`
- `personal-website`
- `full-stack`
- `data-analytics`

### README Badges (Optional)

Add status badges to your README:
```markdown
![Deploy Status](https://github.com/martintbj/personal-website/actions/workflows/deploy.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
```

## 🔗 Current GitHub Connections

- **GitHub Profile**: https://github.com/martintbj
- **LinkedIn**: http://www.linkedin.com/in/martintrujiber
- **Email**: jtrunal1015@gmail.com
- **Museum Database**: https://github.com/martintbj/Museum-Database

## 📝 Notes

- The `.gitignore` file is already configured to exclude `node_modules`, `dist`, and other build artifacts
- GitHub Actions workflow will automatically build and deploy on every push
- Contact form uses Formspree (already configured)
- Resume PDF is located in `public/resume.pdf`
