<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import ToggleMenu from '../components/T-Menu.vue'
import ToggleTawassul from '../components/T-Tawassul.vue'
// import { pesan } from '@/constans/index.js'
const router = useRouter()
</script>
<template>
  <main class="main w-full h-[100vh] bg-slate-100 overflow-hidden">
    <!-- header  -->
    <header class="header px-4 bg-gray-50">
      <div class="flex h-[3.5rem] justify-between items-center">
        <div class="flex items-center gap-4">
          <!-- menu toggle  -->
          <div class="p-3 rounded-lg hover:bg-slate-100">
            <ToggleMenu />
          </div>
          <!-- title  -->
          <span class="text-xl font-medium">AL-FADILATU.io</span>
        </div>
        <div class="flex gap-1 items-center">
          <!-- dark mode  -->
          <div class="p-3 rounded-lg hover:bg-slate-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M16 20.3345V18.135C17.6993 17.2367 19.012 15.7047 19.6233 13.8537C19.0927 13.9504 18.5498 14 18 14C13.0294 14 9 9.97059 9 5.00003C9 4.95443 9.00034 4.90887 9.00102 4.86337C7.04146 5.89875 5.60285 7.77581 5.15045 10H3.11775C3.79375 5.73826 7.30375 2.42006 11.6562 2.03699C11.2352 2.93681 11 3.94095 11 5.00003C11 8.86602 14.134 12 18 12C19.475 12 20.8435 11.5438 21.972 10.7648C21.9905 11.0074 22 11.2526 22 11.5C22 15.5107 19.5146 18.9409 16 20.3345ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z"
              ></path>
            </svg>
          </div>
          <!-- profile user  -->
          <div class="p-3 rounded-lg hover:bg-slate-100 cursor-pointer">
            <ToggleTawassul />
          </div>
        </div>
      </div>
    </header>
    <!-- content  -->
    <section class="section bg-gray-50 pt-4 pb-8">
      <div class="flex">
        <!-- title  -->
        <div class="w-[80%] p-0">
          <div class="text-center mt-4">
            <h1 class="font-aref text-[3.5rem]">الْفَضِيْلَةُ</h1>
            <p class="font-scheherazade text-[1.7rem] text-dark m-0">في الأوراداليوميةوالأدعية</p>
            <span class="text-dark font-scheherazade text-[1.2rem]">
              جمع و ترتيب <br />
              الدّاعى الى اللّه الفقير <br /><span class="text-dark text-[1.5rem]">
                فَضِيْلَةُ الرَّحْمَنْ </span
              ><br />
              نفعنااللّه به بعلومه فى الدّارين آمين <br /><span class="text-[.9rem]"
                >Copyright &copy; 2022</span
              >
            </span>
          </div>
        </div>
        <!-- menu -->
        <div class="w-[20%] p-0">
          <div
            class="shadow-lg rounded-l-3xl bg-gradient-to-b from-slate-300 to-slate-200 py-4 grid justify-center gap-3 ms-auto w-[90%]"
          >
            <!-- Madad -->
            <div @click="router.push('madad')" class="text-center">
              <div>
                <div
                  class="cursor-pointer bg-slate-100 p-1 rounded-full flex items-center justify-center mx-auto w-[40px] h-[40px]"
                >
                  <span class="text-3xl">📖</span>
                </div>
              </div>
              <span class="text-dark text-base">Madad</span>
            </div>
            <!-- Majmuk -->
            <div @click="router.push('majmu')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-slate-100 p-1 rounded-full flex items-center justify-center mx-auto w-[40px] h-[40px]"
                >
                  <span class="text-3xl">📚</span>
                </div>
              </div>
              <span class="text-dark text-base">Majmu'</span>
            </div>
            <!-- Tahlil -->
            <div @click="router.push('/tahlil-pendek/tahlil-kubur')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-slate-100 p-1 rounded-full flex items-center justify-center mx-auto w-[40px] h-[40px]"
                >
                  <span class="text-3xl">🤲</span>
                </div>
              </div>
              <span class="text-dark text-base">Tahlil</span>
            </div>
            <!-- Lainnya -->
            <div @click="router.push('/all-menus')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-slate-100 p-1 rounded-full flex items-center justify-center mx-auto w-[40px] h-[40px]"
                >
                  <span class="text-3xl">♻</span>
                </div>
              </div>
              <span class="text-dark text-base">Lainnya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- timeline -->
    <section class="section bg-slate-50 px-4 mt-2 z-10">
      <!-- title timeline -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 py-4">
          <div class="w-[5px] h-[25px] bg-slate-600"></div>
          <h4 class="font-bold text-lg">Mahfudzot</h4>
        </div>
        <div class="p-2 hover:bg-slate-200 rounded-lg cursor-pointer">
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
      <!-- content timeline -->
      <div class="py-4 relative h-[300px]">
        <div class="bg-slate-600 px-2 rounded-md absolute">
          <p class="text-sm text-white">Terbaru</p>
        </div>
        <div class="mt-8">
          <p class="text-right font-scheherazade text-xl">
            اطْلَبِ العِلْمَ مِنَ المَهْدِ إِلىَ اللَحْدِ
          </p>
          <p class="mt-2 font-kalam">Tuntutlah ilmu sejak buaian hingga liang lahat.</p>
        </div>
      </div>
    </section>
  </main>
</template>
