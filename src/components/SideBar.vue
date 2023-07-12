<template lang="">
  <div
    class="absolute w-5 mt-8 transition-all duration-500 delay-150 transform bg-blue-200 shadow-xl h-3/5 rounded-r-xl hover:scale-y-105"
    id="sidebar"
    @mouseover="showSideBar"
    @mouseleave="hideSideBar"
  >
    <p v-if="!isSideBarOpen">{{ sideBarDisplayText }}</p>
    <p v-else class="text-center">{{ openedSideBarDisplayText }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isSideBarOpen = ref(false)

const sideBarDisplayText = '嘻嘻🤭'
const openedSideBarDisplayText = '你好😄'

const showSideBar = () => {
  isSideBarOpen.value = true
}

const hideSideBar = () => {
  isSideBarOpen.value = false
}
</script>
<style lang=""></style>
