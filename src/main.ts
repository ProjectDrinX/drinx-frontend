import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Storage, { StorageType } from "vue3-storage";
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Global component
import LogoComponent from './components/Logo.vue'

const app = createApp(App);
app
  .use(router)
  //.use(Vue3Storage, { namespace: "drinx_local_", storage: StorageType.Local })
  .use(Vue3Storage, { namespace: "drinx_session_", storage: StorageType.Session })
  .component("Logo", LogoComponent)
  .mount("#app");
