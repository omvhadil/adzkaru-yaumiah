<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import MenuToggle from '../components/MenuToggle.vue'
import { pesan } from '@/constans/index.js'
// darkmode
// import { useDark, useToggle } from '@vueuse/core'

// const isDark = useDark()
// const toggleDark = useToggle(isDark)

const router = useRouter()
</script>
<template>
  <main class="main w-full h-[100vh] bg-gradient-to-b from-green-500 to-green-800">
    <!-- begin:header  -->
    <header class="header px-3">
      <div class="flex items-center justify-end h-[3.5rem] gap-5">
        <!-- darkmode -->
        <!-- <div @click="toggleDark()">
          <button v-if="isDark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <button v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div> -->
        <MenuToggle />
      </div>
    </header>
    <!-- end:header  -->
    <!-- begin:content  -->
    <section class="section">
      <div class="flex mt-4">
        <!-- begin:icon -->
        <div class="w-[80%] p-0">
          <div class="text-center mt-4">
            <h1 class="font-aref text-yellow-300 text-[3.5rem]">الْخُلاَصَةُ</h1>
            <p class="font-scheherazade text-[1.7rem] text-white m-0">في الأوراداليوميةوالأدعية</p>
            <span class="text-white font-scheherazade text-[1.2rem]">
              جمع و ترتيب <br />
              الدّاعى الى اللّه الفقير <br /><span class="text-white font-semibold text-[1.5rem]">
                فضيلة الرّحمن </span
              ><br />
              نفعنااللّه به بعلومه فى الدّارين آمين <br /><span class="text-[.9rem]"
                >Copyright &copy; 2023</span
              >
            </span>
          </div>
        </div>
        <!-- end:icon -->
        <!-- begin:menu -->
        <div class="w-[20%] p-0">
          <div
            class="shadow-sm rounded-l-3xl bg-green-100 py-4 grid justify-center gap-3 ms-auto w-[90%]"
          >
            <!-- Madad -->
            <div @click="router.push('madad')" class="text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-600 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="white"
                      d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM10 4H6C5.44772 4 5 4.44772 5 5V15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H17V12L13.5 10L10 12V4Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="text-green-800 text-[.8rem]">Madad</span>
            </div>
            <!-- Majmuk -->
            <div @click="router.push('majmu')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-600 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="white"
                      d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM9 13H4V19H20V13H15V16H9V13ZM20 7H4V11H9V9H15V11H20V7ZM11 11V14H13V11H11ZM9 3V5H15V3H9Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="text-green-800 text-[.8rem]">Majmu'</span>
            </div>
            <!-- Tahlil -->
            <div @click="router.push('/tahlil-pendek/tahlil-kubur')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-600 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="white"
                      d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71403 11.8922 2.71403 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM8.19258 4.50299C8.416 4.06569 8.92388 3.85532 9.39107 4.00656L11.0761 4.55201C11.6767 4.74644 12.3233 4.74644 12.9239 4.55201L14.609 4.00656C15.0761 3.85532 15.584 4.06569 15.8074 4.50298L16.6132 6.08016C16.9004 6.64234 17.3577 7.09958 17.9199 7.3868L19.497 8.19258C19.9343 8.416 20.1447 8.92388 19.9935 9.39107L19.448 11.0761C19.2536 11.6767 19.2536 12.3233 19.448 12.9239L19.9935 14.609C20.1447 15.0761 19.9343 15.584 19.497 15.8074L17.9199 16.6132C17.3577 16.9004 16.9004 17.3577 16.6132 17.9199L15.8074 19.497C15.584 19.9343 15.0761 20.1447 14.609 19.9935L12.9239 19.448C12.3233 19.2536 11.6767 19.2536 11.0761 19.448L9.39107 19.9935C8.92388 20.1447 8.416 19.9343 8.19258 19.497L7.3868 17.9199C7.09958 17.3577 6.64234 16.9004 6.08016 16.6132L4.50299 15.8074C4.06569 15.584 3.85532 15.0761 4.00656 14.609L4.55201 12.9239C4.74644 12.3233 4.74644 11.6767 4.55201 11.0761L4.00656 9.39107C3.85532 8.92388 4.06569 8.416 4.50299 8.19258L6.08016 7.3868C6.64234 7.09958 7.09958 6.64234 7.3868 6.08016L8.19258 4.50299ZM6.7596 11.7574L11.0022 16L18.0733 8.92897L16.6591 7.51476L11.0022 13.1716L8.17382 10.3431L6.7596 11.7574Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="text-green-800 text-[.8rem]">Tahlil</span>
            </div>
            <!-- Lainnya -->
            <div @click="router.push('/all-menus')" class="menu-item text-center">
              <div>
                <div
                  class="cursor-pointer bg-green-600 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="white"
                      d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="text-green-800 text-[.8rem]">Lainnya</span>
            </div>
          </div>
        </div>
        <!-- end:menu -->
      </div>
    </section>
    <!-- end:content  -->
    <div class="px-4 mt-10">
      <div class="overflow-hidden rounded-md bg-tranparent">
        <h5 class="text-center bg-tranparent text-white py-2 text-uppercase">Pesan</h5>
        <span class="text-center block p-4 text-lg text-white">"{{ pesan[1].text }}"</span>
      </div>
    </div>
  </main>
</template>
