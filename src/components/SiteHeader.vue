<script setup>
import { ref } from 'vue'
import QuintetMark from './QuintetMark.vue'

const open = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <RouterLink class="brand" to="/" @click="open = false">
        <span class="mark" aria-hidden="true"><QuintetMark /></span>
        Quintet Daily
      </RouterLink>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="open"
        aria-controls="primary-nav"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>

      <nav id="primary-nav" class="site-nav" :class="{ open }">
        <RouterLink to="/privacy" @click="open = false">Privacy</RouterLink>
        <RouterLink to="/terms" @click="open = false">Terms</RouterLink>
        <RouterLink to="/support" @click="open = false">Support</RouterLink>
        <RouterLink class="btn small" :to="{ path: '/', hash: '#get-the-app' }" @click="open = false">
          Get the app
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
