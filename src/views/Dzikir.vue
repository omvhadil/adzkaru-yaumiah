<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../constans/index.js'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import { ref, computed } from 'vue'

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
</script>
<template>
  <Header :title="kitab.arab">
    <template #menu>
      <div v-if="jmlcategorydzikir > 1" class="flex bg-green-600 p-2 px-3 gap-2 w-full">
        <button
          v-for="item in category?.dzikri"
          :key="item.id"
          @click="categoryNumber = item.id - 1"
          class="bg-green-300 border-light w-full p-1 text-dark text-sm rounded-md"
          type="button"
        >
          {{ item.title }}
        </button>
      </div>
    </template>
  </Header>

  <div class="container transition mt-10 px-2" :class="jmlcategorydzikir > 1 ? 'py-10' : 'py-0'">
    <div class="pt-5">
      <div class="text-center mb-3">
        <div>
          <h2 class="m-0 font-aref mb-3 text-[3rem]">﴾ {{ category.arab }} ﴿</h2>
          <h4 v-if="jmlname" class="m-0">﴾ {{ tampilCategory?.name }} ﴿</h4>
          <span v-if="jmlSubname" class="m-0">{{ tampilCategory?.subName }}</span>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr v-for="item in tampilCategory?.bait_bait" :key="item.id">
            <td class="col-11" :class="item.arab ? 'border-bottom' : ''">
              <h2
                style="direction: rtl; unicode-bidi: bidi-override; line-height: 2 !important"
                class="m-0 py-1 font-scheherazade font-semibold text-[1.5rem]"
                align="justify"
              >
                {{ item.arab }}
              </h2>
              <h2 class="m-0 py-1 font-scheherazade text-[1.2rem]" align="justify">
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
