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
  <div class="container mt-14 pt-4 pb-5">
    <div class="grid gap-2">
      <div v-for="(item, index) in kitab.category" :key="item.id" class="col-12">
        <div
          @click="router.push('/' + kitabId + '/' + item.slug)"
          class="flex shadow-sm rounded-sm overflow-hidden cursor-pointer border h-[50px]"
        >
          <div
            class="flex items-center justify-center bg-gradient-to-br from-green-200 to-green-300 text-dark w-[40px]"
          >
            <h6 class="m-0">{{ index + 1 }}</h6>
          </div>
          <div class="flex items-center ps-3 text-gray-600">
            <p class="m-0">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
