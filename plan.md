## Plan: Static Portfolio (GitHub Pages)

You’ll get a modern, dark, single-page static portfolio (HTML/CSS/JS) with smooth, subtle scroll-reveal animations and a clean “resume-like” layout: Hero + quick links, then Education, Certifications, Skills, Professional Experience, and Projects. Content stays easy to maintain by keeping each section as a consistent “card” pattern in HTML (copy/paste a card to add a new item), while JS handles only UX polish (nav highlighting + animations + accessibility). You’ll export your resume PDF to a text file and add it to the repo so we can accurately populate each section.

**Steps**
1. Scaffold the static structure:
   - Create index.html, css/styles.css, js/main.js
   - Create assets/ for icons/headshot and assets/resume/ for a downloadable resume
2. Build the page layout in index.html:
   - Sticky top nav with anchor links to each section
   - Hero block (Name, Title, 1–2 line summary, location/timezone optional, CTA buttons like “Download Resume”, “LinkedIn”, “GitHub”, “Email”)
   - Sections: Education, Certifications, Skills, Professional Experience, Projects
   - Use a reusable “card” markup pattern per entry (education card, job card, project card) to make additions fast
3. Implement the dark, sleek design in css/styles.css:
   - Use CSS variables (tokens) for background/surface/text/accent and spacing scale
   - Modern typography sizing, responsive grid, consistent card styling
   - Ensure high contrast and accessible focus states (keyboard navigation)
4. Add smooth, minimal animations in js/main.js:
   - IntersectionObserver-based reveal for section headers/cards
   - Respect prefers-reduced-motion (disable or drastically reduce animation)
   - Optional: active section highlight in nav based on scroll position
5. Add resume/source content to the repo:
   - Put your exported resume text into content/resume.txt
   - Place the downloadable PDF at assets/resume/resume.pdf
   - Populate the HTML cards using the resume text as the source of truth (Education/Certs/Skills/Experience/Projects)
6. Prepare GitHub Pages compatibility:
   - Keep paths relative (no build step)
   - Add a short README.md with how to update sections (copy/paste a card) and how to deploy via GitHub Pages

**Verification**
- Manual: open index.html locally and confirm layout/animations work and all anchors scroll correctly.
- Accessibility: keyboard-tab through nav and links; verify visible focus and readable contrast.
- GitHub Pages: push to GitHub, enable Pages for the repo, confirm assets load and “Download Resume” works.

**Decisions**
- Hosting: GitHub Pages (static, relative paths).
- Theme: dark default.
- Maintainability: “edit HTML directly” via consistent card patterns (JS used only for animation/navigation polish, not for content rendering).
- Resume ingestion: you’ll add exported text as content/resume.txt so section content matches your real resume exactly.
