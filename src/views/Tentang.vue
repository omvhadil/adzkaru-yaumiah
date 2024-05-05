<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <header
    class="container fixed rounded-bl-2xl rounded-br-2xl h-[3.5rem] flex items-center justify-between gap-3 bg-gradient-to-r from-slate-300 to-slate-200"
  >
    <div @click="router.back()">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="black"
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
      </div>
    </div>
    <h4 class="font-semibold text-lg text-dark font-kalam-regular">Tentang</h4>
  </header>
  <section class="container">
    <div class="pt-16">
      <h4 class="text-center font-semibold text-xl pt-5 pb-2">TENTANG</h4>
      <span class=""
        >Khulasoh.io merupakan aplikasi untuk membaca dzikir dan do'a melalui peramban (browser),
        tanpa perlu lagi install aplikasi tambahan, tanpa iklan dan tanpa analitik apapun sehingga
        lebih aman untuk privasi data anda.</span
      >
      <br />
      <span class="">
        Khulasoh.io menggunakan berbagai sumber data, diantaranya:<br />
        1. Al-Khulashotul Madadan An-Nabawy<br />
        2. Majmu'atus Syarif<br />
        3. Simtud Duror<br />
        4. Ad-Diba'i
      </span>
    </div>
  </section>
</template>
