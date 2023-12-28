import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).use(bootstrap).component("v-select", vSelect).mount('#app')
