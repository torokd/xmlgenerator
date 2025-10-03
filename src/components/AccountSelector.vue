<script setup lang="ts">
import { ref } from 'vue'

const accountNumber = ref<string>('')

const emit = defineEmits<{
  (e: 'update:accountNumber', value: string): void
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  accountNumber.value = value
  emit('update:accountNumber', value)
}
</script>

<template>
  <div class="account-selector">
    <label for="accountNumber">Account number</label>
    <input
      id="accountNumber"
      type="text"
      class="input"
      placeholder="Please provide accountNumber here!"
      :value="accountNumber"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
.account-selector {
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
