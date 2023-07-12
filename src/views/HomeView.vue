<script setup lang="ts">
import MenuComponent from '@/components/MenuComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
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
  <main class="bg-gray-50 main-page">
    <MenuComponent />
    <div class="container px-10 py-20 pt-10 mx-auto">
      <img
        class="w-full max-h-40"
        src="https://thumb.photo-ac.com/56/564d7708097fcf9e3afc35d896da492d_t.jpeg"
        alt="background-image"
      />
      <div class="w-full mx-auto text-xl italic font-semibold text-center text-indigo-500">
        Welcome to my blog my friend
      </div>
      <div class="w-full mx-auto mt-20">
        <div class="grid">
          <div class="grid grid-cols-2 gap-x-9">
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>

            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>

            <div class="h-12 my-4">
              <div
                class="flex items-center justify-between h-full cursor-pointer rounded-3xl bg-blue-50 hover:bg-blue-100"
              >
                <div class="flex max-w-lg ml-10 hover:scale-90">文章标题1</div>
                <div class="flex pr-4">作者：wky</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalWrap :show-modal="isModalShow" @closeModal="closeModal" />
  </main>
  <FooterComponent />
</template>
<style>
.main-page::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(5px);
  z-index: -1;
  background-image: url('/bg.jpg');
}
</style>
