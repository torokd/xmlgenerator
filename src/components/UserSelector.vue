<script setup lang="ts">
import { ref } from 'vue'

const userId = ref<string>('')

const emit = defineEmits<{
  (e: 'update:userId', value: string): void
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  userId.value = value
  emit('update:userId', value)
}
</script>

<template>
  <div class="user-selector">
    <label for="userId">User Id</label>
    <input
      id="userId"
      type="text"
      class="input"
      placeholder="Please provide userID here!"
      :value="userId"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
.user-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
}

.input {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.input:focus {
  border-color: #42b983;
  outline: none;
}
</style>