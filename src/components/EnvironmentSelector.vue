<script setup lang="ts">
import { ref } from 'vue'

// reaktív állapot a kiválasztott környezethez
const selectedEnv = ref<string | null>(null)

// az elérhető opciók (később bővíthető)
const environments = ['DEV', 'UAT']

// esemény kiválasztás után
const emit = defineEmits<{
  (e: 'update:environment', value: string | null): void
}>()

// figyeljük a változást és kiküldjük a parent-nek
const handleChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  selectedEnv.value = value
  emit('update:environment', value)
}
</script>

<template>
  <div class="env-selector">
    <!-- fő cím -->
    <p class="instruction">Please choose environment!</p>

    <div class="form-row">
      <label for="environment">Environment</label>
      <select
        id="environment"
        class="dropdown"
        :value="selectedEnv || ''"
        @change="handleChange"
      >
        <option disabled value="">Choose</option>
        <option
          v-for="env in environments"
          :key="env"
          :value="env"
        >
          {{ env }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.env-selector {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.instruction {
  font-weight: 500;
  margin: 0;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

label {
  min-width: 120px;
  font-weight: 600;
}

.dropdown {
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 150px;
}

.dropdown:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 4px rgba(66, 185, 131, 0.4);
}
</style>
