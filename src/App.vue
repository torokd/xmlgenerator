<script setup lang="ts">
import { ref } from 'vue'
import EnvironmentSelector from './components/EnvironmentSelector.vue'
import UserSelector from './components/UserSelector.vue'
import AccountSelector from './components/AccountSelector.vue'
import PaymentTypeSelector from './components/PaymentTypeSelector.vue'
import GenerateButton from './components/GenerateButton.vue'
import OutputWindow from './components/OutputWindow.vue'
import { generateCardTransactionXml } from './utils/xmlGenerators'

// külön állapot minden mezőnek
const environment = ref<string | null>(null)
const userId = ref<string>('')
const accountNumber = ref<string>('')
const transactions = ref<any>(null)
const generatedXML = ref<string>('')

// gomb megnyomásakor pl. kiírjuk a konzolba
const handleGenerate = () => {
  const xml = generateCardTransactionXml(userId.value, accountNumber.value)
  generatedXML.value = xml;
}
</script>

<template>
  <EnvironmentSelector v-model:environment="environment" />
  <UserSelector v-model:userId="userId" />
  <AccountSelector v-model:accountNumber="accountNumber" />
  <PaymentTypeSelector v-model:transactions="transactions" />
  <GenerateButton @click="handleGenerate" />
  <OutputWindow :xml="generatedXML" />
</template>
