# Tanmay Ghosh - Portfolio Website

A modern, interactive portfolio website showcasing AI/ML projects, professional experience, and technical skills. Built with React, Vite and Tailwind CSS.

![Portfolio Preview](./preview.png)

## 🌟 Features

- **Agent-Build Reveal**: On the first visit of a session, a team of cursors assembles the page layer by layer (see below)
- **Light Motion**: Sections fade in on scroll; no animation library
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility
- **Analytics Integration**: Google Analytics 4 for tracking user engagement
- **Contact Form**: EmailJS integration for direct communication
- **Resume Download**: One-click resume download functionality

## 🚀 Live Demo

Visit the live portfolio: [ghoshnet.github.io/Tanmay-Portfolio](https://ghoshnet.github.io/Tanmay-Portfolio/)

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **Vite** (v4.1.0) - Build tool and dev server
- **TailwindCSS** (v3.2.6) - Utility-first CSS framework

### Animation
- **Agent-build reveal** - custom, dependency-free (`src/agentBuild/`)

### Other Libraries
- **EmailJS** (v3.10.0) - Email service integration
- **React Icons** (v5.4.0) - Icon library

## 🤖 Agent-Build Reveal

On the first page load of a browser session, coloured "agent" cursors draw each
element with a selection box, size readout and guide lines while the page tours
itself, then return to the top.

- **Skip**: scrolling, touching, any key, or the Skip button ends it at once.
- **Replay**: the "Replay the build" button in the footer.
- **Reduced motion**: visitors with that system setting never see it.
- **Add an element**: give it a `data-l` attribute (`data-l="text"` for text that
  should wipe in). Elements without it simply appear with their parent.
- **Two paces**: it opens slowly (hero and Overview) so the effect is readable,
  then speeds up for the rest of the page.
- **Tune it**: agent counts, timings and where the slow part ends (`slowUntil`)
  are the `T` object at the top of `src/agentBuild/engine.js`.
- **Turn it off**: remove `<AgentBuild />` from `src/App.jsx` and the small inline
  script in `index.html`.

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GhoshNet/Tanmay-Portfolio.git
   cd Tanmay-Portfolio
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
   - Ensure the filename matches the download link in `Navbar.jsx`

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

4. **Navbar** (`src/components/Navbar.jsx`):
   - Update nav links, resume download link, and LinkedIn URL

5. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Update email address

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── ...                 # Other public assets
├── src/
│   ├── assets/             # Images and icons
│   ├── agentBuild/         # Agent-build reveal (engine, styles, React wrapper)
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Beyond.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Feedbacks.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── ui.jsx          # Shared section heading and timeline row
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
   "homepage": "https://ghoshnet.github.io/Tanmay-Portfolio/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   > Note: `vite.config.js` already sets `base: '/Tanmay-Portfolio/'`, which is required for the project site to resolve assets correctly on GitHub Pages.

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

### Build Animation Not Playing
- It runs once per browser session: open a new tab or use "Replay the build" in the footer
- It is disabled when the system "reduce motion" setting is on

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
- LinkedIn: [linkedin.com/in/tanmay-g](https://www.linkedin.com/in/tanmay-g/)
- GitHub: [github.com/GhoshNet](https://github.com/GhoshNet)

## 🙏 Acknowledgments

- All open-source contributors

---

**Built with ❤️ by Tanmay Ghosh**

*Last updated: June 2026*
