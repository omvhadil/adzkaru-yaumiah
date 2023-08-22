<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { dataKyai } from '../constans/index'
</script>
<template>
  <div
    style="color: #fff; cursor: pointer"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#tawassul"
    aria-controls="tawassul"
  >
    <!-- begin:icon -->
    <div class="d-flex">
      <span class="text-secondary me-2">Tawassul</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="#9c9898"
          d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
        ></path>
      </svg>
    </div>
    <!-- end:icon -->
  </div>

  <div
    class="offcanvas offcanvas-end"
    data-bs-backdrop="static"
    tabindex="-1"
    id="tawassul"
    aria-labelledby="staticBackdropLabel"
    style="width: 350px"
  >
    <div class="offcanvas-header bg-gradient-first-color-alt text-white">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Tawassul Maqbaroh</h5>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-for="kyai in dataKyai" :key="kyai.id" class="row mb-4">
        <h6 class="fw-bold text-first-color mb-0">{{ kyai.daerah }}</h6>
        <div class="">
          <p v-for="item in kyai.ulama" :key="item.id" class="m-0">- {{ item.nama_ulama }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
