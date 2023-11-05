<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SwitchToggle from './SwitchToggle.vue'
</script>
<template>
  <div x-data="{ open: false }">
    <div x-on:click="open = true">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="#ffffff" d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </div>
    <div
      x-show="open"
      x-transition
      class="w-[80%] h-[100vh] shadow-lg fixed top-0 right-0 z-10 bg-white py-8 px-6"
    >
      <div x-on:click="open = false" class="absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
          ></path>
        </svg>
      </div>
      <div class="absolute top-4 left-4">
        <h6 class="text-lg font-semibold text-green-800">Pengaturan</h6>
      </div>
      <div class="grid gap-4 mt-8 text-gray-700 mb-6">
        <div class="flex gap-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM10.9989 16.0002V18.0002H12.9989V16.0002H10.9989ZM10.9989 9.00017V14.0002H12.9989V9.00017H10.9989Z"
              ></path>
            </svg>
          </div>
          <h4>Tentang</h4>
        </div>
        <div class="flex gap-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
              ></path>
            </svg>
          </div>
          <h4>Beri Rating</h4>
        </div>
        <div class="flex gap-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
              ></path>
            </svg>
          </div>
          <h4>Bagikan</h4>
        </div>
        <div class="flex gap-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z"
              ></path>
            </svg>
          </div>
          <h4>Privasi</h4>
        </div>
      </div>
      <hr />
      <div class="grid mt-6 gap-4">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-base font-semibold">Mode Gelap</p>
            <p class="text-xs">Mode gelap tidak aktif</p>
          </div>
          <div>
            <SwitchToggle />
          </div>
        </div>
        <div class="flex">
          <div>
            <p class="text-base font-semibold">Bacaan Latin</p>
            <p class="text-xs">Bacaan latin tidak ditampilkan</p>
          </div>
        </div>
        <div class="flex">
          <div>
            <p class="text-base font-semibold">Terjemahan</p>
            <p class="text-xs">Terjemahan tidak ditampilkan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
