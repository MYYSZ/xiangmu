import Vue from 'vue'
import App from './App.vue'
import 'swiper/css/swiper.css'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav/typenav.vue'
import Pagination from '@/components/Pagination/pagination.vue'

Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);

import router from '@/router'
//引入仓库
import store from '@/store';

import '@/mock/mockServe'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
