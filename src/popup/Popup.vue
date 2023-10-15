<script setup lang="ts">
import Logo from '~/components/Logo.vue'
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  chrome.runtime.openOptionsPage()
}
let count = 0
function changeStorageDemo() {
  storageDemo.value = `changed Value${count.toString()}`
  count++
}

function removeStorageDemo() {
  storageDemo.value = null
}
</script>

<template>
  <div>
    Popup Page
  </div>
  <Logo />
  <button class="text-xs bg-blue-300 rounded" @click="openOptionsPage">
    Open Options Page
  </button>
  <div class="mt-2">
    <span class="opacity-50">Storage:</span> {{ storageDemo }}
  </div>
  <button @click="changeStorageDemo">
    改变缓存数据
  </button>
  <button @click="removeStorageDemo">
    删除缓存数据
  </button>
</template>

<style>
body {
  @apply w-96 h-96 bg-gray-100;
}
</style>
