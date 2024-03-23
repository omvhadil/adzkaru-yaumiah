<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../constans/index.js'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import { ref, computed, watchEffect } from 'vue'

const categoryNumber = ref(0)
const kitabId = useRoute().params.kitab
const categoryId = useRoute().params.category
const kitab = data.find((item) => item.slug === kitabId)
const category = kitab.category.find((item) => item.slug === categoryId)
const dzikri = category.dzikri
const tampilCategory = computed(() => dzikri[categoryNumber.value])

const jmlcategorydzikir = dzikri.length

const jmlname = dzikri[categoryNumber.value].name.length
const jmlSubname = dzikri[categoryNumber.value].subName.length

watchEffect(() => {})
</script>
<template>
  <Header :title="kitab.arab">
    <template #menu>
      <div v-if="jmlcategorydzikir > 1" class="flex p-2 px-3 gap-2 w-full">
        <button
          v-for="item in category?.dzikri"
          :key="item.id"
          @click="categoryNumber = item.id - 1"
          class="bg-slate-50 border-light w-full p-1 text-dark text-sm rounded-md"
          type="button"
        >
          {{ item.title }}
        </button>
      </div>
    </template>
  </Header>

  <div
    class="container bg-slate-50 transition mt-10 px-0 min-h-[100vh]"
    :class="jmlcategorydzikir > 1 ? 'py-10' : 'py-0'"
  >
    <div class="pt-5">
      <div class="text-center mb-3">
        <div>
          <h2 class="m-0 font-aref mb-3 text-[3rem] text-gray-800">﴾ {{ category.arab }} ﴿</h2>
          <h4 v-if="jmlname" class="m-0 font-kalam-regular text-slate-50">
            ﴾ {{ tampilCategory?.name }} ﴿
          </h4>
          <span v-if="jmlSubname" class="m-0 font-kalam-regular text-lg text-dark">{{
            tampilCategory?.subName
          }}</span>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr
            v-for="item in tampilCategory?.bait_bait"
            :key="item.id"
            class="even:bg-slate-50 odd:bg-slate-50"
          >
            <td class="col-11 px-2" :class="item.arab ? 'border-b' : ''">
              <h2 class="m-0 py-1 font-scheherazade text-[1.9rem] text-dark" align="right">
                {{ item.arab }}
              </h2>
              <!-- <h4
                v-if="terjemahan"
                class="m-0 py-1 font-scheherazade text-[1rem] text-white"
                align="left"
              >
                {{ item.arti }}
              </h4> -->
              <h2 class="m-0 py-1 font-kalam-regular text-[1.3rem] text-gray-700" align="center">
                {{ item.indo }}
              </h2>
              <div v-if="item.image.length">
                <img :src="item.image" alt="" class="w-full" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
style="direction: rtl; unicode-bidi: bidi-override; line-height: 2 !important"
