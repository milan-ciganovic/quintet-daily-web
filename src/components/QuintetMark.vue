<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 22,
  },
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="32.5 32.5 175 175" fill="none" aria-hidden="true">
    <circle
      cx="114"
      cy="114"
      r="74"
      stroke="currentColor"
      stroke-width="15"
      stroke-dasharray="74.49 18.5"
      stroke-dashoffset="25.6"
    />
    <path d="M166 166 L200 200" stroke="currentColor" stroke-width="15" stroke-linecap="round" />
  </svg>
</template>
