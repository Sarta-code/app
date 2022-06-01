import Vue from 'vue';
import App from './App.vue';
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';

// 引入配置好的路由规则
import router from '@/router';
// 引入配置好的仓库
import store from '@/store';
// 引入mock
import '@/mock/mockServer';

// 将开发版本提示关闭
Vue.config.productionTip = false;
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
import '../node_modules/swiper/dist/css/swiper.css';
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store,
  beforeCreate () {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
