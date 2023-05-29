require('./bootstrap');

// import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { i18nVue } from 'laravel-vue-i18n'

const vuetify = createVuetify({
  components,
  directives,
});



createApp(App).use(vuetify).use(i18nVue,{
  lang: 'ar',
    resolve: lang => import(`./lang/${lang}.json`),
}).mount('#app')
import Toaster from '@meforma/vue-toaster';

createApp(App).use(Toaster).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
