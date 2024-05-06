<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { dataKyai } from '../constans'
// import { useRouter } from 'vue-router'

// const router = useRouter()
</script>
<template>
  <div x-data="{ opened: false }">
    <div x-on:click="opened = true" class="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M9.74462 21.7446C5.30798 20.7219 2 16.7473 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.7473 18.692 20.7219 14.2554 21.7446L12 24L9.74462 21.7446ZM7.01173 18.2567C7.92447 18.986 9.00433 19.5215 10.1939 19.7957L10.7531 19.9246L12 21.1716L13.2469 19.9246L13.8061 19.7957C15.0745 19.5033 16.2183 18.9139 17.1676 18.1091C15.8965 16.8078 14.1225 16 12.1597 16C10.1238 16 8.29083 16.8692 7.01173 18.2567ZM5.61562 16.8214C7.25644 15.0841 9.58146 14 12.1597 14C14.644 14 16.8931 15.0065 18.5216 16.634C19.4563 15.3185 20 13.7141 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.7964 4.59708 15.4722 5.61562 16.8214ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
        ></path>
      </svg>
    </div>
    <div
      x-show="opened"
      x-transition
      class="w-full h-[100vh] fixed top-0 right-0 z-20 bg-black bg-opacity-25"
    >
      <div class="w-[90%] shadow-lg fixed top-0 right-0 z-30 bg-gray-100">
        <div
          x-on:click="opened = false"
          class="absolute top-3 right-4 hover:bg-white p-1 rounded-lg cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="black"
              d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
            ></path>
          </svg>
        </div>

        <div class="grid gap-4 px-4 text-dark mb-6 pt-12 w-100 h-[100vh] overflow-y-scroll">
          <div v-for="item in dataKyai" :key="item.id">
            <h3>📌{{ item.daerah }}</h3>
            <div v-for="itm in item.ulama" :key="itm.id" class="ml-6">
              <span>{{ itm.nama_ulama }}</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
