<script setup lang="ts">
import DeeriiComponent from '~/components/DeeriiCheckbox.vue'
import DeeriiInput from '~/components/DeeriiInput.vue'
</script>

<template>
  <h1>DeerII</h1>
  <DeeriiComponent :model-value="true" />
  <DeeriiInput :model-value="'Input Value'" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
