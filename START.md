# Quick Start Guide

## 🚀 Running Your Website

1. **Open Terminal** in this directory (`personal-website`)

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 📝 Next Steps - Personalization

### Update Your Contact Information

Replace placeholder links with your actual information in these files:

1. **src/components/Hero.jsx**
   - Line 31: LinkedIn URL
   - Line 39: Email address

2. **src/components/Contact.jsx**
   - Line 24: Email address
   - Line 34: LinkedIn URL

3. **src/components/Footer.jsx**
   - Line 20: LinkedIn URL
   - Line 27: Email address

### Recommended Updates:

- **Email**: Replace `your.email@example.com` with your actual email
- **LinkedIn**: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile URL
- **GitHub**: Already set to `https://github.com/martintbj` (update if different)

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the color scheme

### Add More Projects
Edit `src/components/Projects.jsx` and add to the `projects` array

### Update Experience
Edit `src/components/Experience.jsx` and modify the `experiences` array

### Modify Skills
Edit `src/components/Skills.jsx` and update the `skillCategories` array

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment Options

- **Vercel**: Connect your GitHub repo at vercel.com
- **Netlify**: Drag and drop the `dist` folder at netlify.com
- **GitHub Pages**: Use gh-pages package
- **Railway**: Connect your GitHub repository

## 🐛 Troubleshooting

If you encounter issues:

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Run `npm run dev`

## 📞 Need Help?

Check the README.md file for more detailed information.
