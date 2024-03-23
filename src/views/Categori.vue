<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { data } from '../constans'
import Header from '../components/Header.vue'

const router = useRouter()
const kitabId = useRoute().params.kitab
const kitab = data.find((item) => item.slug === kitabId)
</script>
<template>
  <Header :title="kitab.arab" />
  <div class="container mt-14 pt-4 pb-5 bg-gray-50 min-h-[100vh]">
    <div class="grid">
      <div
        v-for="(item, index) in kitab.category"
        :key="item.id"
        class="col-12 hover:bg-gray-200 rounded-lg"
      >
        <div
          @click="router.push('/' + kitabId + '/' + item.slug)"
          class="flex cursor-pointer h-[50px]"
        >
          <div class="flex">
            <div class="flex items-center justify-center text-dark w-[40px]">
              <h6 class="m-0">{{ index + 1 }}.</h6>
            </div>
            <div class="flex items-center text-dark">
              <p class="m-0 text-base font-kalam-regular">{{ item.title }}</p>
            </div>
          </div>
          <div class="flex items-center ml-auto pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
              ></path>
            </svg>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
