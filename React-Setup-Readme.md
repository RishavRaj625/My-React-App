# My React App

A modern React application built with Vite and React Router for fast development and optimal performance.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning fast build tool and dev server
- **React Router** - Client-side routing for single page applications
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript ES6+** - Latest JavaScript features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

Check your versions:
```bash
node --version
npm --version
```

## 🔧 Setup & Installation

npm create vite@latest my-app -- --template react
cd my-app
npm install

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/my-app.git
cd my-app
```

### 2. Install Dependencies
```bash
npm install
```
*This will install all packages listed in package.json including React, Vite, and React Router*

### 3. Install React Router (if not already included)
```bash
npm install react-router-dom
```

## 🏃‍♂️ Start Development Server

Run the development server with hot reload:

```bash
npm run dev
```

- Opens at: `http://localhost:5173`
- Hot reload: Changes appear instantly
- Dev tools: React DevTools compatible

### Development Features:
- ⚡ **Fast HMR** - Hot Module Replacement
- 🔥 **Instant feedback** - See changes immediately
- 🐛 **Error overlay** - Clear error messages in browser
- 📱 **Mobile testing** - Access via network IP

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- ✅ Bundle and minify your code
- ✅ Optimize assets for production
- ✅ Generate source maps
- ✅ Create a `dist/` folder with production files

### Build Output:
```
dist/
├── assets/
│   ├── index-[hash].js    # Minified JavaScript
│   └── index-[hash].css   # Minified CSS
└── index.html             # Production HTML
```

## 🌐 Preview Production Build

Test your production build locally:

```bash
npm run preview
```

- Preview at: `http://localhost:4173`
- Tests production optimizations
- Verifies build works correctly

## 📁 Project Structure

```
my-app/
├── public/                 # Static assets
│   ├── vite.svg
│   └── index.html         # HTML template
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Navbar.jsx
│   ├── pages/            # Page components for routing
│   │   ├── HomePage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx           # Main App component with routes
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   └── main.jsx          # Entry point
├── .gitignore            # Files to ignore in git
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🧭 React Router Setup

### Basic Router Configuration:

```jsx
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
```

### Navigation Component:

```jsx
// components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Automatic deployments on every push

### Netlify
1. Run `npm run build`
2. Upload `dist/` folder to [Netlify](https://netlify.com)
3. Or connect GitHub for auto-deploy

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/my-app"
}
```

Deploy:
```bash
npm run deploy
```

## 🔧 Configuration

### Vite Configuration (vite.config.js)
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      // Change dev server port
    open: true       // Auto-open browser
  }
})
```

### Environment Variables
Create `.env` file in root:
```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
```

Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

## 🐛 Troubleshooting

### Common Issues:

**Port already in use:**
```bash
npm run dev -- --port 3001
```

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Router not working on deployment:**
- Configure server for SPA routing
- Add `_redirects` file for Netlify: `/* /index.html 200`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/my-app/issues)
- 📖 Documentation: [React Docs](https://react.dev) | [Vite Docs](https://vitejs.dev)

---

**Built with ❤️ using React + Vite**
