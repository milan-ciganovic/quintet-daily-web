// Shared Vue 3 components for the site's header, footer, and the answer-grid
// widget used in the hero and share preview.
//
// Plain global script on purpose (not `type="module"`): browsers block
// module scripts from `file://` under CORS, and this site should still work
// when someone just double-clicks index.html, no local server required.
// Vue is loaded from the CDN as a global (`window.Vue`) for the same reason.
(function () {
  'use strict';

  const AnswerGrid = {
    props: {
      cells: { type: Array, required: true },
    },
    template: `
      <div class="answer-grid">
        <span
          v-for="(correct, i) in cells"
          :key="i"
          class="cell"
          :class="{ miss: !correct }"
        ></span>
      </div>
    `,
  };

  const SiteHeader = {
    props: {
      // Which nav link to mark aria-current: 'privacy' | 'terms' | 'support'.
      // Home has no header nav entry, so it's left blank there.
      active: { type: String, default: '' },
    },
    data() {
      return { open: false };
    },
    template: `
      <div class="wrap">
        <a class="brand" href="./">
          <span class="mark" aria-hidden="true">
            <svg viewBox="32.5 32.5 175 175" fill="none">
              <circle cx="114" cy="114" r="74" stroke="currentColor" stroke-width="15"
                stroke-dasharray="74.49 18.5" stroke-dashoffset="25.6"/>
              <path d="M166 166 L200 200" stroke="currentColor" stroke-width="15" stroke-linecap="round"/>
            </svg>
          </span>
          Quintet Daily
        </a>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="open"
          aria-controls="primary-nav"
          @click="open = !open"
        >
          <span class="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <nav id="primary-nav" class="site-nav" :class="{ open }">
          <a href="./privacy.html" :aria-current="active === 'privacy' ? 'page' : null">Privacy</a>
          <a href="./terms.html" :aria-current="active === 'terms' ? 'page' : null">Terms</a>
          <a href="./support.html" :aria-current="active === 'support' ? 'page' : null">Support</a>
          <a class="btn small" href="./#get-the-app">Get the app</a>
        </nav>
      </div>
    `,
  };

  const SiteFooter = {
    template: `
      <div class="wrap">
        <p>&copy; 2026 Quintet Daily</p>
        <nav>
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./terms.html">Terms of Service</a>
        </nav>
      </div>
    `,
  };

  window.QD = { AnswerGrid, SiteHeader, SiteFooter };
})();
