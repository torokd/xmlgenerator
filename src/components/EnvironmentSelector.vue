<template>
  <div class="env-row">
    <label for="environment" class="label">Environment</label>
    <select id="environment" v-model="selectedEnv" class="dropdown">
      <option disabled value="">Choose</option>
      <option value="DEV">DEV</option>
      <option value="UAT">UAT</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineModel } from 'vue'

const model = defineModel<string>()

const selectedEnv = ref('')

watch(selectedEnv, (val) => {
  model.value = val
})
</script>

<style scoped>
.env-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  width: 200px; /* ugyanaz, mint a User ID label */
  text-align: left;
}

/* Dropdown stílus a korábbi inputhoz igazítva */
.dropdown {
  flex: 1;
  min-width: 220px;
  padding: 0.45rem 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  color: #333;
  background-color: #fafafa;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown:hover {
  background-color: #f5f5f5;
}

.dropdown:focus {
  outline: none;
  border-color: #0078ff;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
  background-color: #fff;
}
</style>
