<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
// import Tawassul from '../components/Tawassul.vue'
import MenuToggle from '../components/MenuToggle.vue'
import { pesan } from '@/constans/index.js'

const router = useRouter()
</script>
<template>
  <!-- begin:header  -->
  <header class="header px-3">
    <div class="flex items-center justify-end h-[3.5rem] gap-5">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="#4b5563"
            d="M21 4V18.7215C21 18.9193 20.8833 19.0986 20.7024 19.1787L12 23.0313L3.29759 19.1787C3.11667 19.0986 3 18.9193 3 18.7215V4H1V2H23V4H21ZM5 4V17.7451L12 20.8441L19 17.7451V4H5ZM8 8H16V10H8V8ZM8 12H16V14H8V12Z"
          ></path>
        </svg>
      </div>
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
          <h1 class="font-aref text-green-500 text-[3.5rem]">الْخُلاَصَةُالْوَاعِيَّةُ</h1>
          <p class="font-aref text-[1.7rem] text-gray-500 m-0">في الأوراداليوميةوالأدعية</p>

          <span class="text-gray-500 font-aref text-[1.5rem]">
            جمع و ترتيب <br />
            الدّاعى الى اللّه الفقير <br /><span
              class="text-dark-emphasis font-semibold text-[1.5rem]"
            >
              فضيلة الرّحمن بن شمسل </span
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
          class="rounded-l-3xl bg-gradient-to-b from-green-400 to-green-600 py-4 grid justify-center gap-3 ms-auto w-[90%]"
        >
          <!-- Madad -->
          <div @click="router.push('madad')" class="text-center">
            <div>
              <div
                class="cursor-pointer bg-green-300 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
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
            <span class="text-white text-[.8rem]">Madad</span>
          </div>
          <!-- Majmuk -->
          <div @click="router.push('majmu')" class="menu-item text-center">
            <div>
              <div
                class="cursor-pointer bg-green-300 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
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
            <span class="text-white text-[.8rem]">Majmu'</span>
          </div>
          <!-- Tahlil -->
          <div @click="router.push('/majmu/tahlil-kubur')" class="menu-item text-center">
            <div>
              <div
                class="cursor-pointer bg-green-300 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
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
            <span class="text-white text-[.8rem]">Tahlil</span>
          </div>
          <!-- Lainnya -->
          <div @click="router.push('/all-menus')" class="menu-item text-center">
            <div>
              <div
                class="cursor-pointer bg-green-300 p-2 rounded-full flex items-center justify-center mx-auto w-[45px] h-[45px]"
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
            <span class="text-white text-[.8rem]">Lainnya</span>
          </div>
        </div>
      </div>
      <!-- end:menu -->
    </div>
  </section>
  <!-- end:content  -->
  <main class="ps-3 pe-3 mt-5">
    <div class="overflow-hidden rounded-md shadow-sm bg-gray-100">
      <h5 class="text-center bg-green-600 text-white py-2 text-uppercase">Pesan</h5>
      <span class="text-center block p-3 text-lg">"{{ pesan[1].text }}"</span>
    </div>
  </main>
</template>
