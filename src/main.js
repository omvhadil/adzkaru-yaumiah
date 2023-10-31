import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

import './assets/main.css'
import 'remixicon/fonts/remixicon.css'

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

const app = createApp(App)

app.use( VueSplide );

app.use(router)

app.mount('#app')
