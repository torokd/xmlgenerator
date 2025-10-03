<script setup lang="ts">
// Egyszerű gomb – nincs prop, nincs CTA extra
const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="generate-btn" @click="handleClick">
    Generate
  </button>
</template>

<style scoped>
.generate-btn {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #d25454;
  cursor: pointer;
}

.generate-btn:hover {
  background: #b02b2b;
}
</style>
