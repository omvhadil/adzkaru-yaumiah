<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div
    style="color: #fff; cursor: pointer"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#toggle"
    aria-controls="toggle"
  >
    <!-- begin:icon -->
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="#9c9898" d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </div>
    <!-- end:icon -->
  </div>

  <div
    class="offcanvas offcanvas-end"
    data-bs-backdrop="static"
    tabindex="-1"
    id="toggle"
    aria-labelledby="staticBackdropLabel"
    style="width: 350px"
  >
    <div class="offcanvas-header bg-gradient-first-color-alt text-white">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Menu</h5>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <p>Masih Belum selesai</p>
    </div>
  </div>
</template>
