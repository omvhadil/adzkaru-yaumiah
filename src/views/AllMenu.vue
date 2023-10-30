<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <!-- Header -->
  <header class="container h-[3.5rem] flex items-center justify-between gap-3">
    <div @click="router.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
        ></path>
      </svg>
    </div>
    <h4 class="font-semibold">All Menu</h4>
  </header>
  <!-- Main -->
  <main class="container mt-4">
    <section class="grid grid-cols-4 gap-3 mb-3">
      <!-- madad  -->
      <div
        @click="router.push('/madad')"
        class="flex flex-col justify-center items-center text-center"
      >
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="black"
              d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM10 4H6C5.44772 4 5 4.44772 5 5V15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H17V12L13.5 10L10 12V4Z"
            ></path>
          </svg>
        </div>
        <p>Madad</p>
      </div>
      <!-- majmu -->
      <div
        @click="router.push('/majmu')"
        class="flex flex-col justify-center items-center text-center"
      >
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="black"
              d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM9 13H4V19H20V13H15V16H9V13ZM20 7H4V11H9V9H15V11H20V7ZM11 11V14H13V11H11ZM9 3V5H15V3H9Z"
            ></path>
          </svg>
        </div>
        <p>Majmu'</p>
      </div>
      <!-- tahlil pendek -->
      <div
        @click="router.push('/majmu/tahlil-kubur')"
        class="flex flex-col justify-center items-center text-center"
      >
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="black"
              d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71403 11.8922 2.71403 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM8.19258 4.50299C8.416 4.06569 8.92388 3.85532 9.39107 4.00656L11.0761 4.55201C11.6767 4.74644 12.3233 4.74644 12.9239 4.55201L14.609 4.00656C15.0761 3.85532 15.584 4.06569 15.8074 4.50298L16.6132 6.08016C16.9004 6.64234 17.3577 7.09958 17.9199 7.3868L19.497 8.19258C19.9343 8.416 20.1447 8.92388 19.9935 9.39107L19.448 11.0761C19.2536 11.6767 19.2536 12.3233 19.448 12.9239L19.9935 14.609C20.1447 15.0761 19.9343 15.584 19.497 15.8074L17.9199 16.6132C17.3577 16.9004 16.9004 17.3577 16.6132 17.9199L15.8074 19.497C15.584 19.9343 15.0761 20.1447 14.609 19.9935L12.9239 19.448C12.3233 19.2536 11.6767 19.2536 11.0761 19.448L9.39107 19.9935C8.92388 20.1447 8.416 19.9343 8.19258 19.497L7.3868 17.9199C7.09958 17.3577 6.64234 16.9004 6.08016 16.6132L4.50299 15.8074C4.06569 15.584 3.85532 15.0761 4.00656 14.609L4.55201 12.9239C4.74644 12.3233 4.74644 11.6767 4.55201 11.0761L4.00656 9.39107C3.85532 8.92388 4.06569 8.416 4.50299 8.19258L6.08016 7.3868C6.64234 7.09958 7.09958 6.64234 7.3868 6.08016L8.19258 4.50299ZM6.7596 11.7574L11.0022 16L18.0733 8.92897L16.6591 7.51476L11.0022 13.1716L8.17382 10.3431L6.7596 11.7574Z"
            ></path>
          </svg>
        </div>
        <p>Tahlil</p>
      </div>
    </section>
    <hr />
    <section class="grid grid-cols-4 gap-4 mt-3">
      <!-- simtud -->
      <div
        @click="router.push('/simtut')"
        class="flex flex-col justify-center items-center text-center"
      >
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="dark"
              d="M12 0.585938L18 6.58594V9.00024H22V19.0002H23V21.0002H1V19.0002H2V9.00024H6V6.58594L12 0.585938ZM18 19.0002H20V11.0002H18V19.0002ZM6 11.0002H4V19.0002H6V11.0002ZM8 7.41436V19.0002H11V12.0002H13V19.0002H16V7.41436L12 3.41436L8 7.41436Z"
            ></path>
          </svg>
        </div>
        <p>Simtud</p>
      </div>
      <!-- diba' -->
      <div
        @click="router.push('/diba')"
        class="flex flex-col justify-center items-center text-center"
      >
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="dark"
              d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"
            ></path>
          </svg>
        </div>
        <p>Diba'</p>
      </div>
      <!-- basaudan -->
      <div class="flex flex-col justify-center items-center text-center">
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="dark"
              d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 9.00002C8.68629 9.00002 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 9.00002 12 9.00002ZM12 10.5L13.3225 13.1797L16.2798 13.6094L14.1399 15.6953L14.645 18.6406L12 17.25L9.35497 18.6406L9.86012 15.6953L7.72025 13.6094L10.6775 13.1797L12 10.5ZM18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902L18 2.00002ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"
            ></path>
          </svg>
          <div class="absolute top-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="red"
                d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM11 15.7324V18H13V15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"
              ></path>
            </svg>
          </div>
        </div>
        <p>Basaudan</p>
      </div>
      <!-- ramadhan -->
      <div class="flex flex-col justify-center items-center text-center">
        <div class="bg-green-200 rounded-full h-[45px] w-[45px] p-2 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="dark"
              d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8.5L12.0049 2L17.0049 8.5L22.0049 5V17H2.00488V5ZM4.00488 8.84131V15H20.0049V8.84131L16.5854 11.2349L12.0049 5.28024L7.42435 11.2349L4.00488 8.84131Z"
            ></path>
          </svg>
          <div class="absolute top-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="red"
                d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM11 15.7324V18H13V15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"
              ></path>
            </svg>
          </div>
        </div>
        <p>Ramadhan</p>
      </div>
    </section>
  </main>
</template>
