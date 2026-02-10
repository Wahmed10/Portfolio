## Plan: Mobile Scroll Lock + Fixed Header

You already toggle `body.menu-open` when the hamburger opens ([js/main.js](js/main.js#L56-L75)), and you already try `overflow:hidden` on mobile ([css/styles.css](css/styles.css#L369-L403)). The remaining issues are (a) iOS Safari scroll “leaks” unless we also lock `html` and use the body-`position:fixed` pattern with scroll position restore, and (b) your header uses `position: sticky` ([css/styles.css](css/styles.css#L70-L79)) but the requirement is “locked on the screen”, which is more reliably satisfied by `position: fixed` on both desktop + mobile.

**Steps**
1. Make the header truly locked (desktop + mobile)  
   - Update `.site-header` in [css/styles.css](css/styles.css#L70-L79) from `position: sticky` to `position: fixed` with `top: 0; left: 0; right: 0;` and keep an appropriate `z-index`.  
   - Add layout compensation so content doesn’t slide under the fixed header (e.g., add top padding to `main` in [index.html](index.html#L34) via CSS, using the existing “~60px header” assumption already implied by `.hero{ min-height: calc(100vh - 60px) }` in [css/styles.css](css/styles.css#L92-L101)).

2. Implement cross-browser scroll lock for the open hamburger menu (iOS-safe)  
   - Keep your existing class toggle flow in [js/main.js](js/main.js#L56-L75), but refactor it into explicit `openMenu()` / `closeMenu()` helpers.  
   - On open: store `window.scrollY`, then set body to a locked state (`position: fixed`, `top: -scrollY`, `left/right: 0`, `width: 100%`) and add `menu-open` to both `document.body` and `document.documentElement`.  
   - On close: remove the fixed positioning styles, remove the classes, and restore scroll with `window.scrollTo(0, savedScrollY)`.

3. Strengthen the CSS lock + menu panel scrolling behavior (mobile)  
   - Expand the lock rule in [css/styles.css](css/styles.css#L369-L403) so it targets both `html.menu-open` and `body.menu-open` (not just `body`), since iOS may scroll the root element.  
   - Make the fullscreen menu panel scrollable without re-enabling background scroll: add `overflow-y: auto` and `-webkit-overflow-scrolling: touch` to `.nav__list` in the mobile block ([css/styles.css](css/styles.css#L381-L393)).  
   - (Optional but small) Add `overscroll-behavior: contain` to the open menu panel to reduce scroll chaining on supporting browsers.

4. Prevent iOS “rubber-band” scroll leaks during menu open (without changing UX)  
   - When the menu is open, attach a `touchmove` listener with `{ passive: false }` that calls `preventDefault()` unless the gesture originates inside `.nav__list` (so the menu can scroll if needed).  
   - Remove that listener when the menu closes. This stays aligned with your current UX (no outside-tap-to-close; close via toggle or link click).

**Verification**
- Desktop: scroll the page; header stays pinned; clicking nav anchors lands with correct offset (re-check `scroll-padding-top` in [css/styles.css](css/styles.css#L43-L49)).  
- Mobile emulation + real devices: open hamburger, attempt to scroll the page behind it (should not move), scroll inside the menu (should work if it overflows), close menu and confirm scroll position restores exactly.  
- iOS Safari: specifically test “drag to overscroll” while menu open; confirm no background movement.

**Decisions**
- Header behavior: implement “locked” as `position: fixed` (more reliable than sticky for the stated requirement).  
- Scroll locking: use the iOS-safe “body fixed + restore scrollY” approach, not only `overflow: hidden`.
