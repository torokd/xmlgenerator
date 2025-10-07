<template>
  <div class="userId-input">
    <label for="userId" class="label">User ID</label>
    <input
      id="userId"
      v-model="userId"
      type="text"
      class="input"
      placeholder="Provide userId here!"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userId = ref('')
</script>

<style scoped>
.env-selector {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.input {
  flex: 1;
  min-width: 220px;
  padding: 0.45rem 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  color: #333;
  background-color: #fafafa;
  transition: all 0.2s ease;
}

.input::placeholder {
  color: #aaa;
}

.input:hover {
  background-color: #f5f5f5;
}

.input:focus {
  outline: none;
  border-color: #0078ff;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
  background-color: #fff;
}
</style>
