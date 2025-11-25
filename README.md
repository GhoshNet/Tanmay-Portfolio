# Tanmay Ghosh - Portfolio Website

A modern, interactive portfolio website showcasing AI/ML projects, professional experience, and technical skills. Built with React, Three.js, and cutting-edge web technologies.

![Portfolio Preview](./preview.png)

## 🌟 Features

- **3D Interactive Elements**: Engaging 3D models powered by Three.js and React Three Fiber
- **Smooth Animations**: GSAP and Framer Motion for fluid, professional animations
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility
- **Analytics Integration**: Google Analytics 4 for tracking user engagement
- **Contact Form**: EmailJS integration for direct communication
- **Resume Download**: One-click resume download functionality

## 🚀 Live Demo

Visit the live portfolio: [tanmayghosh.dev](https://tanmayghosh.dev) *(update with your actual URL)*

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **Vite** (v4.1.0) - Build tool and dev server
- **TailwindCSS** (v3.2.6) - Utility-first CSS framework

### 3D & Animations
- **Three.js** (v0.172.0) - 3D graphics library
- **React Three Fiber** (v8.11.1) - React renderer for Three.js
- **React Three Drei** (v9.56.24) - Useful helpers for R3F
- **GSAP** (v3.12.7) - Professional-grade animation
- **Framer Motion** (v9.0.7) - React animation library

### Other Libraries
- **EmailJS** (v3.10.0) - Email service integration
- **React Router DOM** (v6.8.1) - Client-side routing
- **React Icons** (v5.4.0) - Icon library
- **React Tilt** (v1.0.2) - Tilt effect for cards
- **React Vertical Timeline** (v3.6.0) - Timeline component

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanmayghosh01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   - EmailJS credentials (for contact form)
   - Google Analytics Measurement ID (optional)

4. **Add your resume**
   - Place your resume PDF in `/public/resume.pdf`
   - Ensure the filename matches the download link in `Hero.jsx`

5. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add credentials to `.env`:
   ```
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Google Analytics Setup

See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for detailed instructions.

Quick setup:
1. Create a GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Update `index.html` with your Measurement ID (lines 33 and 38)

### Customization

#### Update Personal Information

1. **Constants** (`src/constants/index.js`):
   - Update `experiences` with your work history
   - Update `projects` with your projects
   - Update `technologies` with your tech stack
   - Update GitHub links to your repositories

2. **About Section** (`src/components/About.jsx`):
   - Update education details
   - Modify professional description

3. **Hero Section** (`src/components/Hero.jsx`):
   - Update tagline and introduction
   - Update LinkedIn URL

4. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Update email address

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── ...                 # Other public assets
├── src/
│   ├── assets/             # Images, icons, 3D models
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── canvas/         # 3D canvas components
│   ├── constants/          # Data and constants
│   │   └── index.js
│   ├── hoc/                # Higher-order components
│   ├── utils/              # Utility functions
│   │   ├── analytics.js    # Analytics tracking
│   │   └── motion.js       # Animation utilities
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point
│   └── styles.js           # Style constants
├── .env.example            # Environment variables template
├── ANALYTICS_SETUP.md      # Analytics setup guide
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.cjs     # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## 🎨 Customizing Styles

### Colors
Primary color scheme is defined in `tailwind.config.cjs`:
- Primary: `#915EFF` (Purple)
- Secondary: `#aaa6c3` (Light gray)
- Tertiary: `#151030` (Dark purple)

To change colors, update the `tailwind.config.cjs` file.

### Fonts
The portfolio uses custom fonts. Update in `index.css`:
```css
@font-face {
  font-family: 'YourFont';
  src: url('./assets/fonts/YourFont.woff2');
}
```

## 📊 Analytics Events

The portfolio tracks the following user interactions:

- **Page Views**: Automatic
- **Resume Downloads**: Click on "Download Resume" button
- **Social Clicks**: LinkedIn, GitHub, Email links
- **Project Clicks**: GitHub links on project cards
- **Contact Form**: Form submissions

View analytics in Google Analytics → Reports → Engagement → Events

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. New site from Git → Select repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔒 Environment Variables

Required environment variables (see `.env.example`):

```env
# EmailJS (Required for contact form)
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (Optional)
VITE_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🐛 Troubleshooting

### 3D Models Not Loading
- Ensure Three.js dependencies are installed
- Check browser console for errors
- Try clearing cache and rebuilding

### Contact Form Not Working
- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for service status
- Ensure environment variables are loaded

### Analytics Not Tracking
- Verify Measurement ID in `index.html`
- Check browser console for errors
- Disable ad blockers for testing
- Wait a few minutes for data to appear

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Tanmay Ghosh**
- Email: tanmay.actin@gmail.com
- LinkedIn: [linkedin.com/in/tanmay-g](https://www.linkedin.com/in/tanmay-g/)
- GitHub: [github.com/tanmayghosh01](https://github.com/tanmayghosh01)

## 🙏 Acknowledgments

- Three.js community for amazing 3D resources
- React Three Fiber for seamless React integration
- GSAP for professional animations
- All open-source contributors

---

**Built with ❤️ by Tanmay Ghosh**

*Last updated: November 2024*
