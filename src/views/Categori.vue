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
  <div class="container mt-14 pt-4 pb-5 bg-slate-50 min-h-[100vh]">
    <div class="grid gap-3">
      <div
        v-for="(item, index) in kitab.category"
        :key="item.id"
        class="col-12 border border-slate-300 bg-slate-200"
      >
        <div
          @click="router.push('/' + kitabId + '/' + item.slug)"
          class="flex shadow-sm rounded-sm overflow-hidden cursor-pointer h-[50px]"
        >
          <div
            class="flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-400 text-dark text-slate-100 w-[40px]"
          >
            <h6 class="m-0">{{ index + 1 }}</h6>
          </div>
          <div class="flex items-center ps-3 text-dark">
            <p class="m-0 text-sm">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
