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
          <p class="text-first-color fw-semibold" style="font-size: 2rem">Dzikir Harian</p>

          <div class="mt-5">
            <span class="text-secondary font-aref" style="font-size: 1.3rem"
              >جمع الفقير الى عفوابه <br /><span class="fw-semibold text-dark-emphasis">
                فضيلة الرّحمن بن شمسل </span
              ><br />
              نفعنااللّه به بعلومه فى الدّارين آمين <br
            /></span>
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
            <h1 class="modal-title fs-5 text-first-color" id="exampleModalLabel">Menu Lainnya</h1>
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
                <!-- Diba -->
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
                        d="M13.0049 16.941V19.0029H18.0049V21.0029H6.00488V19.0029H11.0049V16.941C7.05857 16.4489 4.00488 13.0825 4.00488 9.00293V3.00293H20.0049V9.00293C20.0049 13.0825 16.9512 16.4489 13.0049 16.941ZM1.00488 5.00293H3.00488V9.00293H1.00488V5.00293ZM21.0049 5.00293H23.0049V9.00293H21.0049V5.00293Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Diba'</span>
                </div>
                <!-- basaudan -->
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
                        d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Basaudan</span>
                </div>
                <!-- Haji & Umroh -->
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
                        d="M15.2238 15.5078L13.0111 20.1579C12.8687 20.4572 12.5107 20.5843 12.2115 20.4419C12.1448 20.4102 12.0845 20.3664 12.0337 20.3127L8.49229 16.574C8.39749 16.4739 8.27113 16.4095 8.13445 16.3917L3.02816 15.7242C2.69958 15.6812 2.46804 15.3801 2.51099 15.0515C2.52056 14.9782 2.54359 14.9074 2.5789 14.8425L5.04031 10.3191C5.1062 10.198 5.12839 10.0579 5.10314 9.92241L4.16 4.85979C4.09931 4.53402 4.3142 4.22074 4.63997 4.16005C4.7126 4.14652 4.78711 4.14652 4.85974 4.16005L9.92237 5.10319C10.0579 5.12843 10.198 5.10625 10.319 5.04036L14.8424 2.57895C15.1335 2.42056 15.4979 2.52812 15.6562 2.81919C15.6916 2.88409 15.7146 2.95495 15.7241 3.02821L16.3916 8.13449C16.4095 8.27118 16.4739 8.39754 16.5739 8.49233L20.3127 12.0337C20.5533 12.2616 20.5636 12.6414 20.3357 12.8819C20.2849 12.9356 20.2246 12.9794 20.1579 13.0111L15.5078 15.2238C15.3833 15.2831 15.283 15.3833 15.2238 15.5078ZM16.0206 17.4349L17.4348 16.0207L21.6775 20.2633L20.2633 21.6775L16.0206 17.4349Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Haji Umroh</span>
                </div>
                <!-- Ramadhan -->
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
                        d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Ramadhan</span>
                </div>
                <!-- Jenazah -->
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
                      <path fill="white " d="M10 10.1111V1L21 7V21H3V7L10 10.1111Z"></path>
                    </svg>
                  </div>
                  <span class="ctext-dark">Jenazah</span>
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
    <div class="border border-secondary overflow-hidden rounded-2">
      <h5 class="text-center bg-first-color text-white py-2 text-uppercase">Pesan</h5>
      <span class="text-center d-block p-3 fs-5"
        >"Lakukanlah kebaikan sekecil apapun, karna engkau tidak akan pernah tau kebaikan mana yang
        akan memasukkanmu ke dalam SURGA."</span
      >
    </div>
  </main>
</template>
