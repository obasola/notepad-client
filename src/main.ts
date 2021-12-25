import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import {createPinia} from "pinia"
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from "./store";
const app = createApp(App);
app
  //.use(createPinia())
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)  // provide 'axios'
  .mount('#app')
