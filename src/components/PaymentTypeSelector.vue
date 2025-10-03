<script setup lang="ts">
import { ref } from 'vue'

interface Transaction {
  active: boolean
  currency: string
  amount: number
}

// két tranzakció állapota
const cardTransaction = ref<Transaction>({
  active: false,
  currency: 'HUF',
  amount: 1
})

const outgoingTransaction = ref<Transaction>({
  active: false,
  currency: 'HUF',
  amount: 1
})

const emit = defineEmits<{
  (e: 'update:transactions', value: {
    card: Transaction,
    outgoing: Transaction
  }): void
}>()

// Ha változik valami, kiküldjük parentnek
const update = () => {
  emit('update:transactions', {
    card: cardTransaction.value,
    outgoing: outgoingTransaction.value
  })
}
</script>

<template>
  <fieldset class="type-selector">
    <legend>Choose transaction type</legend>

    <!-- Card transaction -->
    <div class="transaction-row">
      <label>
        <input
          type="checkbox"
          v-model="cardTransaction.active"
          @change="update"
        />
        Kártyás tranzakció
      </label>
      <select v-model="cardTransaction.currency" @change="update">
        <option value="HUF">HUF</option>
        <option value="EUR">EUR</option>
      </select>
      <input
        type="number"
        min="1"
        v-model.number="cardTransaction.amount"
        @input="update"
      />
    </div>

    <!-- Outgoing transaction -->
    <div class="transaction-row">
      <label>
        <input
          type="checkbox"
          v-model="outgoingTransaction.active"
          @change="update"
        />
        Kimenő tranzakció
      </label>
      <select v-model="outgoingTransaction.currency" @change="update">
        <option value="HUF">HUF</option>
        <option value="EUR">EUR</option>
      </select>
      <input
        type="number"
        min="1"
        v-model.number="outgoingTransaction.amount"
        @input="update"
      />
    </div>
  </fieldset>
</template>

<style scoped>
.type-selector {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
}

.transaction-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;
}

input[type="number"] {
  width: 80px;
  padding: 0.4rem;
}
select {
  padding: 0.4rem;
}
</style>
