<template>
  <button class="generate-btn" @click="onGenerate">
    Generate
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

const onGenerate = () => {
  emit('click')
}
</script>

<style scoped>
.generate-btn {
  padding: 0.5rem 1.2rem;
  border: 1px solid #0078ff;
  border-radius: 6px;
  background-color: #0078ff;
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start; /* ha oszlopban van az inputokkal */
}

/* Hover állapot */
.generate-btn:hover {
  background-color: #0065d6;
  border-color: #0065d6;
}

/* Aktív kattintás közben */
.generate-btn:active {
  transform: scale(0.98);
}

/* Fókusz (billentyűzetről) */
.generate-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.3);
}
</style>
