<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import Tawassul from '../components/Tawassul.vue'
import { reactive } from 'vue'

const show = reactive({
  madad: true,
  majmu: true,
  tahlil: true
})

const router = useRouter()
</script>
<template>
  <!-- begin:header  -->
  <header class="header px-3">
    <div class="nav d-flex align-items-center justify-content-end gap-4" style="height: 3.5rem">
      <Tawassul />
    </div>
  </header>
  <!-- end:header  -->
  <!-- begin:content  -->
  <section class="section">
    <div class="row mt-4 g-0">
      <!-- begin:icon -->
      <div class="col-9 p-0">
        <div class="text-center mt-4">
          <h1
            class="nav_logo font-aref text-decoration-none text-first-color"
            style="font-size: 4.5rem"
          >
            أَذْكَارُ يَوْمِيَّة
          </h1>
          <p class="text-first-color" style="font-size: 2rem">Dzikir Harian</p>

          <div class="mt-5">
            <span class="text-secondary">&#169; Alabim 2023. All right reserved</span>
          </div>
        </div>
      </div>
      <!-- end:icon -->
      <!-- begin:menu -->
      <div class="col-3 p-0">
        <div
          class="menu rounded-start-5 bg-gradient-first-color py-4 d-grid justify-content-center gap-3 ms-auto"
          style="width: 90%"
        >
          <div v-if="show.madad" @click="router.push('madad')" class="menu-item text-center">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style="width: 50px; height: 50px"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="white"
                    d="M21 21H13V6C13 4.34315 14.3431 3 16 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM11 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H8C9.65685 3 11 4.34315 11 6V21ZM11 21H13V23H11V21Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Madad</span>
          </div>
          <div v-if="show.majmu" @click="router.push('majmu')" class="menu-item text-center">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style="width: 50px; height: 50px"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="white"
                    d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Majmu'</span>
          </div>
          <div
            v-if="show.tahlil"
            @click="router.push('/majmu/tahlil-kubur')"
            class="menu-item text-center"
          >
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style="width: 50px; height: 50px"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="white"
                    d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Tahlil</span>
          </div>
          <div class="menu-item text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style="width: 50px; height: 50px"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="white"
                    d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Lainnya</span>
          </div>
        </div>
      </div>
      <!-- end:menu -->
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h1 class="modal-title fs-5 text-first-color" id="exampleModalLabel">Semua Menu</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="menu-item text-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="d-flex flex-wrap gap-4">
                <!-- Madad -->
                <div>
                  <div
                    class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative"
                    style="width: 50px; height: 50px"
                  >
                    <span
                      @click="show.madad = !show.madad"
                      :class="show.madad ? 'bg-success' : 'bg-danger'"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                    >
                      {{ show.madad ? '-' : '+' }}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="white"
                        d="M21 21H13V6C13 4.34315 14.3431 3 16 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM11 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H8C9.65685 3 11 4.34315 11 6V21ZM11 21H13V23H11V21Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Madad</span>
                </div>
                <!-- Majmuk -->
                <div>
                  <div
                    class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative"
                    style="width: 50px; height: 50px"
                  >
                    <span
                      @click="show.majmu = !show.majmu"
                      :class="show.majmu ? 'bg-success' : 'bg-danger'"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    >
                      {{ show.majmu ? '-' : '+' }}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="white"
                        d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Majmu'</span>
                </div>
                <!-- Tahlil -->
                <div>
                  <div
                    class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative"
                    style="width: 50px; height: 50px"
                  >
                    <span
                      @click="show.tahlil = !show.tahlil"
                      :class="show.tahlil ? 'bg-success' : 'bg-danger'"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    >
                      {{ show.tahlil ? '-' : '+' }}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="white"
                        d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Tahlil</span>
                </div>
                <!-- Simtud -->
                <div>
                  <div
                    class="cursor menu-icon bg-first-color-alt p-2 rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative"
                    style="width: 50px; height: 50px"
                  >
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                    >
                      Proses
                      <span class="visually-hidden">unread messages</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="white"
                        d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Simtud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end:content  -->
  <main class="ps-3 pe-3 mt-5">
    <div class="border border-dark overflow-hidden rounded-2">
      <h5 class="text-center bg-first-color text-white py-2 text-uppercase">Pesan</h5>
      <span class="text-center d-block p-3 fs-5"
        >"Lakukanlah kebaikan sekecil apapun, karna engkau tidak akan pernah tau kebaikan mana yang
        akan memasukkanmu ke dalam SURGA."</span
      >
    </div>
  </main>
</template>
