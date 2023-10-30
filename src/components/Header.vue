<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
// import Toggle from '../components/Toggle.vue'

const router = useRouter()
const data = defineProps({
  title: {
    type: String,
    default: 'الْبَاقِيْ'
  }
})
</script>
<template>
  <nav class="bg-gradient-to-b from-green-500 to-green-700 fixed top-0 start-0 w-full p-0">
    <div class="container flex items-center p-2 justify-between h-[3.5rem]">
      <div @click="router.back()" class="cursor-pointer">
        <!-- begin:icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="white"
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
        <!-- end:icon -->
      </div>
      <h3 class="text-white font-scheherazade m-0">{{ data.title }}</h3>
      <!-- <Toggle /> -->
    </div>
    <slot name="menu"> </slot>
  </nav>
</template>
