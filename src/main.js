import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 라우터를 포함한 Vue 앱 생성
createApp(App).use(router).mount('#app')
