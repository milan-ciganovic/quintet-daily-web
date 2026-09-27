<script setup>
defineProps({
  // One entry per question: true = correct (filled), false = miss (hollow).
  cells: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="answer-grid">
    <span
      v-for="(correct, i) in cells"
      :key="i"
      class="cell"
      :class="{ miss: !correct }"
    ></span>
  </div>
</template>
