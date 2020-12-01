import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
Vue.component('VueSlider', VueSlider);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Control from './components/Control.vue';

const routes = [
  { name: 'control', path: '/', component: Control },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
