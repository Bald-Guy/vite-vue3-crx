<script setup lang="ts">
import Logo from '~/components/Logo.vue'

function openOptionsPage() {
  chrome.runtime.openOptionsPage()
}
</script>

<template>
  <div class="flex flex-col items-center">
    Popup Page
    <Logo class="mt-4" />
    <button class="mt-4 p-2 text-xs text-white bg-blue-300 rounded" @click="openOptionsPage">
      Open Options Page
    </button>
  </div>
</template>

<style>
#app {
  @apply w-64 h-80;
}
</style>
