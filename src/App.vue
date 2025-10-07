<template>
  <main class="app">
    <img alt="Vue logo" src="./assets/csoti.png" width="80" height="80" />
    <h1>XML Generator Beta</h1>

    <section class="form">
      <!-- Környezet -->
      <EnvironmentSelector v-model="environment" />

      <!-- User ID -->
      <div class="row">
        <label for="userId">User ID</label>
        <input id="userId" v-model="userId" placeholder="Provide userId here!" />
      </div>

      <!-- Account Number -->
      <div class="row">
        <label for="accountNumber">Account number</label>
        <input id="accountNumber" v-model="accountNumber" placeholder="Provide account number here!" />
      </div>

      <!-- Fizetési típusok -->
      <PaymentTypeSelector v-model="payments" />

      <!-- Generate gomb -->
      <GenerateButton
        class="generate"
        :disabled="!isFormValid"
        @click="onGenerate"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 🧩 komponensek
import EnvironmentSelector from './components/EnvironmentSelector.vue'
import PaymentTypeSelector from './components/PaymentTypeSelector.vue'
import GenerateButton from './components/GenerateButton.vue'

// 🧠 XML generátorok
import { generateCardTransactionXml } from './utils/xmlGenerators/cardTransactionGenerator'
import { generateDomesticTransactionXml } from './utils/xmlGenerators/domesticTransactionGenerator'

// === Állapotok ===
const environment = ref('')
const userId = ref('')
const accountNumber = ref('')
interface Payment {
  id: string
  label: string
  enabled: boolean
  amount: number
  currency: string
}

const payments = ref<Payment[]>([])

// === Template–generator mapping (bővíthető) ===
const generators: Record<string, Function> = {
  card: generateCardTransactionXml, // Kártyás fizetés
  transfer: generateDomesticTransactionXml // Átutalás
  // később: direct_debit: generateDirectDebitXml, stb.
}

// === Form validálás (Generate gombhoz) ===
const isFormValid = computed(() => {
  if (!environment.value || !userId.value || !accountNumber.value) return false

  const validPayments = payments.value.filter(
    (p: any) => p.enabled && p.amount >= 1
  )
  return validPayments.length > 0
})

// === Generate gomb logika ===
const onGenerate = () => {
  if (!isFormValid.value) return

  // 1️⃣ Bepipált fizetések kigyűjtése
  const activePayments = payments.value.filter(
    (p: any) => p.enabled && p.amount >= 1
  )

  const allGeneratedXmls: string[] = []

  // 2️⃣ Végigmegyünk az aktív fizetéseken
  for (const payment of activePayments) {
    const generator = generators[payment.id] // 3️⃣ A megfelelő generátor kiválasztása

    if (!generator) {
      console.warn(`⚠️ Ismeretlen fizetési típus: ${payment.id}`)
      continue
    }

    // 4️⃣ Az amount mező alapján több XML generálása
    for (let i = 0; i < payment.amount; i++) {
      const xml = generator(
        userId.value,          // user ID
        accountNumber.value,   // account number
        payment.currency       // currency a dropdownból
      )
      allGeneratedXmls.push(xml)
    }
  }

  // 5️⃣ Ha semmi nem generálódott, jelezzünk
  if (allGeneratedXmls.length === 0) {
    alert('❌ Nincs generálható tranzakció!')
    return
  }

  // 6️⃣ Eredmény letöltése egy XML fájlban
  const blob = new Blob(allGeneratedXmls, { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `transactions_${environment.value}.xml`
  link.click()
  URL.revokeObjectURL(url)

  alert(`✅ ${allGeneratedXmls.length} XML generated and downloaded!`)
}
</script>

<style scoped>
.generate {
  align-self: center;
  margin-top: 1.5rem;
}

.app {
  min-height: 100vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, sans-serif;
  background: #fff;
  color: #186e26;
  padding: 2rem;
  box-sizing: border-box;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
}

.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

label {
  width: 200px;
  text-align: left;
  font-weight: 600;
  color: #333;
}

input {
  flex: 1;
  padding: 0.45rem 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  color: #333; /* ✅ jól látható szöveg */
  background: #fafafa;
  transition: all 0.2s ease;
  width: 280px;
}

input:focus {
  outline: none;
  border-color: #0078ff;
  box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
  background-color: #fff;
}

/* Disabled gomb */
.generate-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
