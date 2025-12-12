# Ayush Dev - Portfolio

My personal portfolio website showcasing my projects, skills, and blog posts.

## 🚀 Live Demo

- **GitHub Pages**: [Your GitHub Pages URL]
- **Vercel**: [Your Vercel URL]

## 📦 Structure

```
portfolio/
├── index.html          # Main portfolio page
├── blogs.html          # Blog listing page
├── style.css          # Additional styles (if any)
├── script.js          # Additional scripts (if any)
├── data/
│   └── blogs.json     # Blog posts data
├── images/            # Images and assets
└── Ayush Dev - Resume.pdf  # Your CV/Resume
```

## 🛠️ Technologies

- HTML5
- CSS3 (Custom styling with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- GitHub Calendar integration

## 📝 Customization

All configuration is done through the `CONFIG` object in `index.html`:

```javascript
const CONFIG = {
  name: 'Ayush Dev',
  email: 'theaayushdev07@gmail.com',
  github: { username: 'theaayushdev', url: 'https://github.com/theaayushdev' },
  linkedin: 'https://www.linkedin.com/in/ayush-dev-5a1488253/',
  x: 'https://x.com/theaayushdev',
  repos: [],
  blogs: [],
  skills: [...],
  activities: [...]
};
```

### Adding Blog Posts

Edit `data/blogs.json`:

```json
[
  {
    "title": "Your Blog Title",
    "date": "Jan 05, 2026",
    "excerpt": "Short description",
    "content": "Full blog content here"
  }
]
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect settings
6. Click "Deploy"

### Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select branch: `main`
4. Select folder: `/ (root)`
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/myportfolio`

## 🔒 Privacy

The `.gitignore` file is configured to exclude:
- Environment files
- IDE configurations
- OS-specific files
- Logs and temporary files

**Note**: Your resume PDF is currently public. To make it private, uncomment the line in `.gitignore`:
```
# *.pdf
```

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 📧 Contact

- Email: theaayushdev07@gmail.com
- GitHub: [@theaayushdev](https://github.com/theaayushdev)
- LinkedIn: [Ayush Dev](https://www.linkedin.com/in/ayush-dev-5a1488253/)
- X/Twitter: [@theaayushdev](https://x.com/theaayushdev)
