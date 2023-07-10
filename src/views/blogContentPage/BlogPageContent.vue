<script setup lang="ts">
import {useRoute} from "vue-router";
import MenuComponent from "@/components/MenuComponent.vue";


const route = useRoute()
const id = route.params.id
</script>

<template>
  <menu-component />

  <div class="lg:w-1/12">
    <div>
      hi
    </div>
  </div>
  <div class="container mx-auto px-4">
    <div class="w-full lg:w-3/4 mx-auto mt-16">
      <h1 class="text-4xl font-bold mb-8">文章标题</h1>
      <div class="mb-8">
        <img class="w-full" src="https://via.placeholder.com/800" alt="Article Image" />
      </div>
      <article class="prose lg:prose-xl">
        <p>这里是文章的内容。你可以在这里写你的文章内容。</p>
      </article>
      <h2 class="text-2xl font-bold mt-8 mb-4">评论</h2>
      <div class="space-y-4">
        <div class="bg-gray-100 p-4 rounded shadow">
          <h3 class="text-lg font-bold">评论者名字</h3>
          <p>这是评论内容。</p>
        </div>
        <!-- 可以添加更多的评论在这里 -->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
