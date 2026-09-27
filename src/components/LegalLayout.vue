<script setup>
defineProps({
  // [{ id: 'what-we-collect', label: 'What we collect' }, ...]
  toc: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="wrap">
    <aside class="legal-toc">
      On this page
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a :href="`#${item.id}`">{{ item.label }}</a>
        </li>
      </ul>
    </aside>

    <article class="legal-body">
      <slot />
    </article>
  </div>
</template>
