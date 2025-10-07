<template>
  <div class="payment-selectors">
    <div class="row" v-for="payment in payments" :key="payment.id">
      <!-- 1. oszlop: checkbox -->
      <input type="checkbox" v-model="payment.enabled" class="checkbox" />

      <!-- 2. oszlop: fizetési típus -->
      <label class="type">{{ payment.label }}</label>

      <!-- 3. oszlop: számmező -->
      <input
        type="number"
        class="amount"
        v-model.number="payment.amount"
        min="0"
        placeholder="0"
      />

      <!-- 4. oszlop: devizanem -->
      <select v-model="payment.currency" class="currency">
        <option value="HUF">HUF</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineModel } from 'vue'

interface PaymentType {
  id: string
  label: string
  enabled: boolean
  amount: number
  currency: string
}

// a v-model kapcsolat a szülő (App.vue) és ez között
const model = defineModel<PaymentType[]>()

// belső state
const payments = ref<PaymentType[]>([
  { id: 'card', label: 'Kártyás fizetés', enabled: false, amount: 0, currency: 'HUF' },
  { id: 'transfer', label: 'Átutalás', enabled: false, amount: 0, currency: 'HUF' }
])

// ha változik, visszaadjuk a szülőnek
watch(
  payments,
  (val) => {
    model.value = val
  },
  { deep: true }
)
</script>

<style scoped>
.payment-selectors {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
}

.row {
  display: grid;
  grid-template-columns: 40px 1fr 100px 100px;
  align-items: center;
  gap: 1.5rem;
}

.checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 21px;
  height: 21px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox:hover {
  border-color: #0078ff;
  box-shadow: 0 0 3px rgba(0, 120, 255, 0.2);
}

.checkbox:checked {
  background-color: #0078ff;
  border-color: #0078ff;
}

.type {
  font-weight: 600;
  color: #333;
}

.amount {
  width: 100%;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  color: black;
  text-align: right;
  background-color: #fafafa;
  transition: all 0.2s ease;
}

.amount:focus {
  outline: none;
  border-color: #0078ff;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
  background-color: #fff;
}

.currency {
  width: 100%;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  color: black;
  background-color: #fafafa;
  transition: all 0.2s ease;
  cursor: pointer;
}

.currency:focus {
  outline: none;
  border-color: #0078ff;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
  background-color: #fff;
}
</style>
