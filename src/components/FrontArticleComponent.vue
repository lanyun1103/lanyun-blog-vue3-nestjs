<script setup lang="ts">
const props = defineProps({
  title: String,
  author: String
})
</script>
<template>
  <div class="h-12 my-4 shadow-md">
    <div
      class="flex items-center justify-between h-full cursor-pointer bg-blue-50 hover:bg-blue-100"
    >
      <div class="flex max-w-lg ml-10 hover:scale-90">{{ props.title }}</div>
      <div class="flex pr-4">作者：{{ props.author }}</div>
    </div>
  </div>
</template>
