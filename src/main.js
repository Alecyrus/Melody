// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import axios from 'axios';
import VueI18n from 'vue-i18n';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../theme/index.less';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';



"use strict";

require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueI18n);
Vue.config.lang = 'zh-CN';

Vue.prototype.$request = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App
   }
})
