<script setup lang="ts">
const props = defineProps({
  author: String,
  title: String,
  date: String
})
</script>

<template>
  <article
    class="flex max-w-xl flex-col items-start justify-between rounded-2xl px-1.5 bg-gray-100 hover:scale-105 transform transition-all duration-300"
  >
    <div
      class="relative flex mt-64 px-2 py-2 items-center gap-x-4 mx-auto bg-white rounded-2xl hover:scale-110 transform transition-all duration-300"
    >
      <img
        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        class="h-10 w-10 rounded-full bg-gray-50"
      />
      <div class="text-sm leading-6">
        <p class="font-semibold text-gray-900">
          <a href="#">
            <span class="absolute inset-0"></span>
            {{ props.author }} {{ props.date }}
          </a>
        </p>
        <p class="text-gray-600">Co-Founder / CTO</p>
      </div>
    </div>
    <div class="group relative mx-auto mb-4">
      <h3
        class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 hover:scale-110 transform transition-all duration-300"
      >
        <a href="#">
          <span class="absolute inset-0"></span>
          {{ props.title }}
        </a>
      </h3>
    </div>
  </article>
</template>

<style scoped lang="scss"></style>
