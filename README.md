# System3 Vue.js Website

This is a Vue.js 3 implementation of the System3 website, featuring AI education and consulting services.

## Brand Kit Implementation

This project implements the System3 brand kit with:

### Typography
- Headings: Söhne Breit (fallback: Inter Tight, Poppins)
- Body: Söhne (fallback: Inter)
- Monospace: Söhne Mono (fallback: IBM Plex Mono, Source Code Pro)

### Color System
- Primary (Periwinkle Lavender): #8E82FE
- Primary Deep: #5B53E3
- Secondary (Sky Azure): #4DA3FF
- Secondary Deep: #2680FF
- Accent (Coral Pink): #F88379
- Accent Deep: #E26D64

### Font Setup

**Important:** To use the Söhne typeface, place the following font files in the `/public/fonts/` directory:

```
soehne-web-buch.otf
soehne-web-buch-kursiv.otf
soehne-web-kraftig.otf
soehne-web-kraftig-kursiv.otf
soehne-web-halbfett.otf
soehne-breit-web-halbfett.otf
soehne-breit-web-kraftig.otf
soehne-mono-web-buch.otf
```

If the Söhne font files are not available, the website will fall back to system fonts that are loaded from Google Fonts.

## Project Overview

This project is built with:
- Vue.js 3 with Composition API
- Vue Router 4 for navigation
- Vite as the build tool
- GSAP for animations
- Professional animation system

## GitHub Pages Deployment

This project is set up for GitHub Pages deployment.

### Automatic Deployment

The GitHub Actions workflow will automatically deploy the site to GitHub Pages when code is pushed to the main branches (main, master, develop).

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
# Install gh-pages package if not already installed
npm install -D gh-pages

# Build and deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
System3-Vue/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable Vue components
│   ├── router/          # Vue Router configuration
│   ├── styles/          # CSS styles
│   ├── utils/           # Utility functions
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── index.html           # HTML entry point
└── vite.config.js       # Vite configuration
```

## Getting Started

1. Install dependencies:
```
npm install
```

2. Run the development server:
```
npm run dev
```

3. Build for production:
```
npm run build
```

4. Preview the production build:
```
npm run preview
```

## Features

- Responsive design that works on all devices
- Light and dark theme modes
- Professional animation system
- Modular component structure for maintainability
- Optimized performance

## Animation System

The website uses a professional animation system that includes:

- Consistent, optimized animations across all pages
- Hardware-accelerated transitions
- Subtle, professional timing and effects
- Automatic initialization through a Vue plugin

## Pages

- Home
- About
- Education
- Consultancy
- Contact
- Courses
- Forms