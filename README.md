# LenzCure Website

Static multi-page marketing website for LenzCure, a pharmaceutical manufacturing and export brand.

## Overview

This repository contains the public-facing website built with plain HTML, CSS, and JavaScript. It includes pages for:

- Home
- Products
- About Us
- Career
- Career Detail
- Contact
- 404

The site uses shared partials for navigation and footer on some pages, page-specific stylesheets, and Firebase Hosting for deployment.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Hosting
- Firebase Analytics

## Project Structure

```text
.
|-- assets/           # Images, icons, and SVGs
|-- partials/         # Reusable HTML partials such as nav and footer
|-- scripts/          # Shared frontend JavaScript
|-- styles/           # Global and page-specific styles
|-- index.html
|-- about.html
|-- product.html
|-- career.html
|-- career-detail.html
|-- career-detail-qc.html
|-- contact.html
|-- 404.html
|-- firebase.json
```

## How It Works

- `scripts/main.js` handles navigation toggle, product accordion behavior, FAQ toggles, slider controls, scroll reveal effects, and contact form UI feedback.
- `scripts/layout-loader.js` loads `partials/nav.html` and `partials/footer.html` at runtime where placeholder containers are present.
- `scripts/firebase-config.js` initializes Firebase Analytics in the browser.

## Local Development

Because some pages load partial HTML with `fetch()`, open the site through a local server instead of opening files directly in the browser.

### Option 1: Python

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

### Option 2: VS Code Live Server

Start the project with Live Server and open the generated local URL.

## Deployment

This project is configured for Firebase Hosting with the site root set to the repository root.

### Deploy with Firebase CLI

```bash
firebase deploy
```

### Firebase Hosting Notes

- `firebase.json` serves files from `.`.
- Hidden files and `node_modules` are ignored.

## Content and Styling

- Global/shared styles live in `styles/main.css`, `styles/nav.css`, and `styles/responsive-fixes.css`.
- Page-specific styles live in files such as `styles/home.css`, `styles/about.css`, and `styles/product.css`.
- Brand imagery and product segment visuals live in `assets/`.

## Current Behavior Notes

- The contact form is currently frontend-only and does not submit data to a backend service.
- Some pages use inline header markup, while others load shared partials dynamically.
- Firebase Analytics is initialized client-side through `scripts/firebase-config.js`.

## Suggested Next Improvements

- Standardize all pages to use the same shared header/footer pattern.
- Connect the contact form to an email service, CRM, or backend endpoint.
- Add SEO metadata and social sharing tags across all pages.
- Add a simple local development script if the team wants a more consistent preview workflow.
