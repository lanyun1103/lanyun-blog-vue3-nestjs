<script setup lang="ts">
import MenuComponent from '@/components/MenuComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ModalWrap from '@/components/ModalWrap.vue'

import { ref } from 'vue'
import FrontArticleComponent from '@/components/FrontArticleComponent.vue';
const isModalShow = ref(false)
const isSideBarOpen = ref(false)

const sideBarDisplayText = '嘻嘻🤭'
const openedSideBarDisplayText = '你好😄'

const articles = [{
  'title': "first",
  'author': 'wky'
},{
  'title': "first",
  'author': 'wky'
},{
  'title': "first",
  'author': 'wky'
},{
  'title': "first",
  'author': 'wky'
},{
  'title': "first",
  'author': 'wky'
},]

const showModal = () => {
  isModalShow.value = true
}
const closeModal = () => {
  isModalShow.value = false
}

const showSideBar = () => {
  isSideBarOpen.value = true
}

const hideSideBar = () => {
  isSideBarOpen.value = false
}
</script>

<template>
  <MenuComponent />
  <div class="absolute w-5 mt-8 transition-all duration-500 delay-150 transform bg-blue-200 shadow-xl h-3/5 rounded-r-xl hover:scale-y-105" id="sidebar" @mouseover="showSideBar" @mouseleave="hideSideBar">
    <p v-if="!isSideBarOpen">{{ sideBarDisplayText }}</p>
    <p v-else class="text-center" >{{ openedSideBarDisplayText }}</p>
  </div>
  <main class="bg-gray-50 main-page">
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
            <FrontArticleComponent           
            v-for="(item, index) in articles"
              :key="index"
              :author="item.author"
              :title="item.title"
              />
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
#sidebar {
    transition: width 0.8s;
    overflow: hidden;
}

#sidebar:hover {
    width: 400px;
}
</style>
