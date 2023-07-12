<script setup lang="ts">
import MenuComponent from '@/components/MenuComponent.vue'
import ModalWrap from '@/components/ModalWrap.vue'

import { ref } from 'vue'
const isModalShow = ref(false)

const showModal = () => {
  isModalShow.value = true
}
const closeModal = () => {
  isModalShow.value = false
}
</script>

<template>
  <main class="bg-gray-50">
    <!-- <TheWelcome /> -->

    <MenuComponent />
    <div class="container pt-10 mx-auto">
      <div class="w-full mx-auto">Welcome to my blog my friend</div>
      <div class="w-full mx-auto mt-20">
        <div class="grid">
          <div class="grid grid-cols-2 gap-x-9">
            <div class="h-16" @mouseenter="showModal">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：王凯禹</div>
              </div>
            </div>
            <div class="h-16">
              <div
                class="flex items-center h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex w-56 max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex">作者：王凯禹</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalWrap :show-modal="isModalShow" @closeModal="closeModal"/>
    <div>
      <footer>hi</footer>
    </div>
  </main>
</template>
