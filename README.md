# Waqar Ahmed — Portfolio Site

A modern, dark-themed, single-page static portfolio built with **HTML / CSS / JS**. No build step — just open `index.html` or deploy to GitHub Pages.

---

## Quick Start

```
# Clone the repo
git clone https://github.com/Wahmed10/Portfolio_Site.git
cd Portfolio_Site

# Open in browser
start index.html        # Windows
open index.html          # macOS
xdg-open index.html      # Linux
```

## Project Structure

```
Portfolio_Site/
├── index.html            ← Main page
├── css/
│   └── styles.css        ← Design tokens + all styles
├── js/
│   └── main.js           ← Scroll-reveal, nav highlight, mobile menu
├── assets/
│   ├── headshot.jpg       ← Profile photo
│   └── resume/
│       └── resume.pdf     ← Downloadable resume
├── resume.txt             ← Plain-text resume (source of truth)
├── plan.md                ← Build plan
└── README.md
```

## How to Update Content

The site uses a **repeatable card pattern**. To add a new experience entry, certification, or project, copy an existing card block in `index.html` and update the text.

### Add a new Experience card

```html
<!-- ── Experience Card ── -->
<article class="card reveal">
  <div class="card__header">
    <div>
      <h3 class="card__title">Job Title</h3>
      <p class="card__subtitle">Company Name</p>
    </div>
    <span class="card__date">Start – End</span>
  </div>
  <ul class="card__list">
    <li>Bullet point 1</li>
    <li>Bullet point 2</li>
  </ul>
</article>
```

### Change the accent colour

All colours live in CSS custom properties at the top of `css/styles.css`:

```css
:root {
  --clr-accent:      #5eead4;   /* teal — change this */
  --clr-accent-hover: #2dd4bf;
  --clr-accent-glow: rgba(94,234,212,.12);
}
```

Pick any hex colour and update those three values.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to **main** branch, root folder `/`.
4. Your site will be live at `https://<username>.github.io/Portfolio_Site/`.

## Accessibility

- Keyboard-navigable with visible focus rings.
- Animations respect `prefers-reduced-motion`.
- Semantic HTML with proper headings, landmarks, and ARIA labels.
- High-contrast text on dark backgrounds.

## License

MIT
