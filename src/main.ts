import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(createPinia())
  .provide('axios', app.config.globalProperties.axios)  // provide 'axios'
  .mount('#app')
