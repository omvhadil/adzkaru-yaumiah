<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <!-- Header -->
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
    <h4 class="font-semibold text-lg text-dark font-kalam">Semua Menu</h4>
  </header>
  <!-- Main -->
  <main class="container pt-[4.5rem] bg-gray-50 min-h-[100vh]">
    <section class="grid grid-cols-4 gap-3 mb-3">
      <!-- madad  -->
      <div
        @click="router.push('/madad')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1">
          <span class="text-3xl">📖</span>
        </div>
        <p class="text-dark">Madad</p>
      </div>
      <!-- majmu -->
      <div
        @click="router.push('/majmu')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1">
          <span class="text-3xl">📚</span>
        </div>
        <p class="text-dark">Majmu'</p>
      </div>
      <!-- tahlil pendek -->
      <div
        @click="router.push('/tahlil-pendek/tahlil-kubur')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1">
          <span class="text-3xl">🤲</span>
        </div>
        <p class="text-dark">Tahlil</p>
      </div>
    </section>
    <hr />
    <section class="grid grid-cols-4 gap-4 mt-3">
      <!-- simtud -->
      <div
        @click="router.push('/simtud')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1">
          <span class="text-3xl">📗</span>
        </div>
        <p class="text-dark">Simtud</p>
      </div>
      <!-- diba' -->
      <div
        @click="router.push('/khusus/diba/sholawat-pertama')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1">
          <span class="text-3xl">📙</span>
        </div>
        <p class="text-dark">Diba'</p>
      </div>
      <!-- kejawean -->
      <div
        @click="router.push('/kejawen')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1 relative">
          <span class="text-3xl">🪔</span>
        </div>
        <p class="text-dark">Kejawen</p>
      </div>
      <!-- basaudan -->
      <div class="flex flex-col justify-center items-center text-center cursor-pointer">
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1 relative">
          <span class="text-3xl">📕</span>
          <div class="absolute top-0 right-0">
            <span class="text-sm">🔐</span>
          </div>
        </div>
        <p class="text-dark">Basaudan</p>
      </div>
      <!-- ramadhan -->
      <div
        @click="router.push('/Ramadhan')"
        class="flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <div class="bg-slate-200 rounded-full h-[40px] w-[40px] p-0 pt-1 relative">
          <span class="text-3xl">📓</span>
        </div>
        <p class="text-dark">Ramadhan</p>
      </div>
    </section>
  </main>
</template>
