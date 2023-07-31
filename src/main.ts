import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from "bootstrap"

// css
// import "./assets/css/style.scss"
import "./assets/css/app.scss"

const app = createApp(App)
app.config.globalProperties.$bootstrap = bootstrap
app.use(router)

app.mount('#app')
