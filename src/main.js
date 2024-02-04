import './assets/tailwind.css'

import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(Notifications)
app.use(router)
app.use(pinia)

app.mount('#app')
