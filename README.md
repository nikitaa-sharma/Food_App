# F00Diee App (Food App PWA)

A simple Progressive Web App (PWA) food catalog built with HTML, CSS, JavaScript, and Materialize CSS.

## Overview

This project is a lightweight mobile-first food app interface with:

- A home page showing food cards
- Side navigation for quick page access
- About and Contact pages
- PWA support through a web app manifest and service worker
- Offline caching of the app shell

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Materialize CSS
- Service Worker + Cache API

## Project Structure

```text
food-app/
	index.html
	manifest.json
	sw.js
	css/
		materialize.min.css
		styles.css
	js/
		app.js
		materialize.min.js
		ui.js
	pages/
		about.html
		contact.html
	img/
		(icons and food images)
```

## Features

- Responsive UI with Materialize components
- Slide-out menu and side form
- Service worker registration on page load
- App shell pre-caching for offline availability
- Installable app experience on supported browsers

## Run Locally

Use a local web server (recommended for service worker behavior).

### Option 1: VS Code Live Server

1. Open the `food-app` folder in VS Code.
2. Start Live Server on `index.html`.
3. Open the provided local URL in your browser.

### Option 2: Node static server

```bash
npx serve food-app
```

Then open the URL shown in the terminal.

## PWA Details

- Manifest file: `food-app/manifest.json`
- Service worker: `food-app/sw.js`
- Service worker registration: `food-app/js/app.js`

The service worker currently caches key static files and serves them from cache when available.

## Notes

- If you update cached files, bump the cache version in `sw.js` (for example, from `foodiee-static-v1` to `foodiee-static-v2`) so clients receive updates.
- Some browser features (install prompt, service worker) may not behave fully when opening files directly with `file:///`.

## Author

Nikita
