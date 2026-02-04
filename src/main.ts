import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import '@/assets/main.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css';

const app = createApp(App)
app.use(createPinia())
app.use(createVuestic())
app.use(VueQueryPlugin)
app.mount('#app')
