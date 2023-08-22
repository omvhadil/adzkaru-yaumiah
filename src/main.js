import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use( VueSplide );

app.use(router)

app.mount('#app')
