# LenzCure 💊

> **Transforming Global Healthcare — One Cure at a Time**

LenzCure is a modern, fully responsive pharmaceutical company website built with vanilla HTML, CSS, and JavaScript. It showcases LenzCure's pharmaceutical product portfolio, global reach, career opportunities, and company information with a clean, professional design.

🌐 **Live Site:** [https://lenzcure-17d63.web.app](https://lenzcure-17d63.web.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

LenzCure is a pharmaceutical company specializing in a broad range of medical segments — from Anti-infectives and Cardiology to Dermatology, Neurology, and Nutraceuticals. The website serves as the company's digital front, providing information about their products, values, global footprint, and job openings.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, product segments, global reach, about snippet, FAQs |
| About | `about.html` | Company story, mission, vision, leadership, global map |
| Products | `product.html` | Full pharmaceutical product portfolio by segment |
| Careers | `career.html` | Open positions and company culture |
| Career Detail | `career-detail.html` | Individual job listing (e.g., Medical Representative) |
| Career Detail QC | `career-detail-qc.html` | Individual job listing (e.g., Quality Control) |
| Contact | `contact.html` | Contact form and company information |
| 404 | `404.html` | Custom not-found page |

---

## Tech Stack

- **HTML5** — Semantic page structure
- **CSS3** — Custom responsive styles with CSS variables and animations
- **Vanilla JavaScript** — Dynamic interactions and layout loading
- **Firebase Hosting** — Static site deployment
- **Google Fonts** — Typography (Inter, Raleway)

---

## Project Structure

```
LenzCure/
│
├── index.html                  # Home page
├── about.html                  # About Us page
├── product.html                # Products page
├── career.html                 # Careers listing page
├── career-detail.html          # Career detail (MR role)
├── career-detail-qc.html       # Career detail (QC role)
├── contact.html                # Contact page
├── 404.html                    # Custom 404 page
│
├── assets/                     # Images, icons, and SVGs
│   ├── logo.svg
│   ├── home-hero.png
│   ├── segment-*.png           # Product segment images
│   ├── icon-*.svg              # Social media icons
│   └── ...
│
├── styles/                     # CSS stylesheets
│   ├── main.css                # Global base styles & CSS variables
│   ├── nav.css                 # Navigation styles
│   ├── home.css                # Home page styles
│   ├── about.css               # About page styles
│   ├── product.css             # Products page styles
│   ├── career.css              # Careers page styles
│   ├── career-detail.css       # Career detail styles
│   ├── contact.css             # Contact page styles
│   └── responsive-fixes.css    # Cross-device responsive overrides
│
├── scripts/                    # JavaScript files
│   ├── main.js                 # Core interactions (nav, animations, FAQ)
│   ├── layout-loader.js        # Loads shared nav and footer partials
│   └── firebase-config.js      # Firebase configuration
│
├── partials/                   # Shared HTML components
│   ├── nav.html                # Navigation bar partial
│   └── footer.html             # Footer partial
│
├── firebase.json               # Firebase Hosting configuration
└── .firebaserc                 # Firebase project alias
```

---

## Features

- ✅ **Fully Responsive** — Optimized for desktop, tablet, and mobile
- ✅ **Smooth Animations** — Section reveal animations on scroll (IntersectionObserver)
- ✅ **Dynamic Layout Loading** — Shared nav and footer loaded via JS partials
- ✅ **Interactive FAQ** — Accordion-style expandable FAQ section
- ✅ **Product Segments** — Visual cards for 11+ pharmaceutical segments
- ✅ **Global Reach Section** — Showcases international presence
- ✅ **Career Listings** — Job detail pages with apply CTA
- ✅ **Custom 404 Page** — Branded error page
- ✅ **Firebase Hosting** — Fast CDN-backed deployment

---

## Getting Started

Since this is a static site, no build step is required.

### Prerequisites

- A modern web browser
- (Optional) [VS Code](https://code.visualstudio.com/) with the **Live Server** extension for local development

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aadarsh2021/Lenzcure.git
   cd Lenzcure
   ```

2. **Open with Live Server** (VS Code):
   - Right-click `index.html` → *Open with Live Server*

   **Or** simply open `index.html` directly in your browser.

> **Note:** The `layout-loader.js` script fetches nav and footer partials via `fetch()`, which requires a local server (not `file://` protocol). Use Live Server or any static file server.

---

## Deployment

The site is deployed on **Firebase Hosting**.

### Deploy Steps

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy:
   ```bash
   firebase deploy
   ```

The site will be live at your Firebase Hosting URL.

---

## Product Segments

LenzCure covers a wide range of therapeutic areas:

| Segment | Segment |
|---------|---------|
| Anti-Infectives | Cardiac & Diabetic Care |
| Dental Care | Dermatology |
| General Medicine | Gynecology |
| Neurology & CNS | Nutraceuticals & Supplements |
| Orthopedic | Pediatric |
| Respiratory Care | |

---

## License

© 2024 LenzCure. All rights reserved.

---

<p align="center">
  Built with ❤️ for better healthcare
</p>
