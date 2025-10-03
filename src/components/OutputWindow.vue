<script setup lang="ts">
import { ref } from 'vue'

// Props: the XML string to display
const props = defineProps<{
  xml: string
}>()

const copied = ref(false)

const copyToClipboard = async () => {
  if (!props.xml) return
  try {
    await navigator.clipboard.writeText(props.xml)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000) // reset after 2s
  } catch (err) {
    console.error("Failed to copy XML:", err)
  }
}
</script>

<template>
  <div class="xml-output">
    <div class="xml-header">
      <h3>Generated XML</h3>
      <button class="copy-btn" @click="copyToClipboard" :title="copied ? 'Copied!' : 'Copy XML'">
        <span v-if="!copied">📋</span>
        <span v-else>✅</span>
      </button>
    </div>
    <pre>{{ xml }}</pre>
  </div>
</template>

<style scoped>
.xml-output {
  position: relative;
  margin-top: 2rem;
  padding: 1rem;
  background: #5b4f4f;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-word;
  min-height: 200px;
}

.xml-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.1s ease;
}

.copy-btn:hover {
  transform: scale(1.2);
}
</style>
