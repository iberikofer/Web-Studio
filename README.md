# 🌐 Web Studio — Digital Agency Website

A modern, responsive multi-page website for a digital web studio and creative agency. This was my **very first web development project**, built to master semantic HTML5 markup, responsive CSS layout techniques, and interactive features from scratch — now enhanced with **TypeScript**! 🚀

---

## 🎨 Figma Mockup

🔗 [Web Studio Design Layout (Version 3.0)](https://www.figma.com/file/B1m2uk25m1eAgroESAuM2g/Web-Studio-(Version-3.0)?type=design&node-id=297046-1554&mode=design&t=0qnasU7mLt3RfBg9-0)

---

## ✨ Features

- 📄 **Multi-Page Layout:** Includes the main landing page (`Studio`) and the dedicated showcase catalog (`Portfolio`).
- 📱 **Fully Responsive Design:** Seamlessly adapts across mobile phones, tablets, and desktop monitors.
- 👁️ **Retina Display Ready:** Includes `@2x` high-density image assets for crisp visuals on Apple and high-DPI screens.
- 📜 **Smart Scroll Header:** Automatically hides when scrolling down to maximize screen space and smoothly reappears when scrolling up.
- 🪟 **Interactive Modal Window:** Popup callback & order form with backdrop blur and smooth open/close animations.
- 🍔 **Mobile Navigation Menu:** Full-screen responsive slide-out hamburger menu with quick contact links.
- 🎨 **Modern CSS Architecture:** Built using CSS custom properties (variables), Flexbox layout, and smooth micro-interactions.
- ⚡ **Strictly Typed (TypeScript):** Fully migrated to TypeScript with null safety, strict DOM element typing, and clean compilation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`), accessibility, form controls |
| **CSS3** | Flexbox, CSS Variables, Media Queries, keyframes & transitions |
| **TypeScript** | Strongly-typed DOM manipulation, modal controller, sticky header observer, mobile menu toggle |
| **Figma** | Pixel-perfect UI implementation based on design mockup |

---

## 📁 Project Structure

```text
Web-Studio/
├── css/
│   └── styles.css                 # Core stylesheets & CSS variables
├── images/                        # Optimized vector (SVG) and raster (@1x, @2x) assets
├── js/                            # Compiled JavaScript output (from TypeScript)
│   ├── modal.js                   # Modal window toggle logic
│   ├── mobile-menu.js             # Mobile navigation drawer logic
│   └── stickyNavigationHandler.js # Sticky header scroll behavior
├── src/                           # TypeScript source files
│   ├── modal.ts                   # Strongly-typed modal logic
│   ├── mobile-menu.ts             # Strongly-typed mobile navigation drawer
│   └── stickyNavigationHandler.ts # Strongly-typed sticky header logic
├── index.html                     # Main studio landing page
├── portfolio.html                 # Portfolio showcase page
├── package.json                   # Project scripts and dependencies
├── tsconfig.json                  # TypeScript compiler configuration
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

To view or work with this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iberikofer/Web-Studio.git
   cd Web-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile TypeScript:**
   ```bash
   # Build once
   npm run build

   # Watch mode for active development
   npm run watch

   # Type checking without emitting
   npm run type-check
   ```

4. **Open the project:**
   - Simply open `index.html` in your favorite web browser, or
   - Use the **Live Server** extension in VS Code for live reloading.
