import './assets/tailwind.css'

import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Notifications)
app.use(router)

app.mount('#app')
