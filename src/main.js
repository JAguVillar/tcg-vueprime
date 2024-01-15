import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'
import PrimeTextInput from 'primevue/inputtext'
import PrimeImage from 'primevue/image'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Prime-TextInput', PrimeTextInput)
app.component('Prime-Image', PrimeImage)

app.mount('#app')
