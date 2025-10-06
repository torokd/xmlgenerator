<template>
    <main class="app">
        <img alt="Vue logo" src="./assets/csoti.png" width="80" height="80" />
        <h1>XML Generator Beta</h1>
        <section>
            <!-- Here will be added the components -->
            <!-- <EnvironmentSelector /> -->
            <!-- <UserId /> -->
            <!-- <AccountNumber /> -->
            <!-- <PaymentTypeSelectorsGroup /> -->
            <!-- <GenerateButton /> -->
            <!-- <DownloadXMLButton /> -->
            <!-- <PushToKafkaButton /> -->
        </section>
    </main>

</template>

<script setup lang="ts">
import EnvironmentSelector from './components/EnvironmentSelector.vue'
</script>

<style scoped>
.app {
    min-height: 100vh;
    width: 70vw;
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: system-ui, sans-serif;
    background-color: #ffffff;
    color: #186e26;
    padding: 2rem;
    box-sizing: border-box;
}
</style>
