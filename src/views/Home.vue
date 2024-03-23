<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import MenuToggle from '../components/MenuToggle.vue'
// import { pesan } from '@/constans/index.js'
const router = useRouter()
</script>
<template>
  <main class="main w-full h-[100vh] bg-slate-200 overflow-hidden">
    <!-- header  -->
    <header class="header px-3 bg-slate-50">
      <div class="flex items-center justify-end h-[3.5rem] gap-5">
        <!-- menu dark mode  -->
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
            ></path>
          </svg>
        </div>
        <!-- menu setting -->
        <MenuToggle />
      </div>
    </header>
    <!-- content  -->
    <section class="section bg-slate-50 pt-4 pb-8">
      <div class="flex">
        <!-- title  -->
        <div class="w-[80%] p-0">
          <div class="text-center mt-4">
            <h1 class="font-aref text-blue-600 text-[3.5rem]">الْخُلَاصَةُ</h1>
            <p class="font-scheherazade text-[1.7rem] text-dark m-0">في الأوراداليوميةوالأدعية</p>
            <span class="text-dark font-scheherazade text-[1.2rem]">
              جمع و ترتيب <br />
              الدّاعى الى اللّه الفقير <br /><span class="text-dark font-semibold text-[1.5rem]">
                فَضِيْلَةُ الرَّحْمَنْ </span
              ><br />
              نفعنااللّه به بعلومه فى الدّارين آمين <br /><span class="text-[.9rem]"
                >Copyright &copy; 2023</span
              >
            </span>
          </div>
        </div>
        <!-- menu -->
        <div class="w-[20%] p-0">
          <div
            class="shadow-sm rounded-l-3xl bg-gradient-to-b from-blue-700 to-blue-400 py-4 grid justify-center gap-3 ms-auto w-[90%]"
          >
            <!-- Madad -->
            <div @click="router.push('madad')" class="text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-100 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <span class="text-3xl">📖</span>
                </div>
              </div>
              <span class="text-white text-[.8rem]">Madad</span>
            </div>
            <!-- Majmuk -->
            <div @click="router.push('majmu')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-100 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <span class="text-3xl">📚</span>
                </div>
              </div>
              <span class="text-white text-[.8rem]">Majmu'</span>
            </div>
            <!-- Tahlil -->
            <div @click="router.push('/tahlil-pendek/tahlil-kubur')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-100 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <span class="text-3xl">🤲</span>
                </div>
              </div>
              <span class="text-white text-[.8rem]">Tahlil</span>
            </div>
            <!-- Lainnya -->
            <div @click="router.push('/all-menus')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-100 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <span class="text-3xl">♻</span>
                </div>
              </div>
              <span class="text-white text-[.8rem]">Lainnya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- timeline -->
    <section class="section bg-slate-50 px-4 mt-2">
      <!-- title timeline -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 py-4">
          <div class="w-[5px] h-[25px] bg-blue-600"></div>
          <h4 class="font-bold text-lg">Mahfudzot</h4>
        </div>
        <div>
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
        <div class="bg-blue-600 px-3 rounded-md absolute">
          <p class="text-small text-white">Terbaru</p>
        </div>
        <div class="mt-8">
          <p class="text-right font-scheherazade text-xl">
            اطْلَبِ العِلْمَ مِنَ المَهْدِ إِلىَ اللَحْدِ
          </p>
          <p class="mt-2 font-kalam-light">Tuntutlah ilmu sejak buaian hingga liang lahat.</p>
        </div>
      </div>
    </section>
  </main>
</template>
