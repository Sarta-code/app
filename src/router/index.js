import Vue from "vue";
// 关闭开发板提示
Vue.config.productionTip = false;
// 引入路由
import VueRouter from "vue-router";
import Home from '@/views/Home';
import Login from '@/views/Login';
import Refister from '@/views/Refister';
import Search from '@/views/Search';

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

// 分装push
VueRouter.prototype.push = function (location, res, rej) {
  if (res && rej) {
    originPush.call(this, location, res, rej);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
};
// 分装replace
VueRouter.prototype.replace = function (location, res, rej) {
  if (res && rej) {
    originReplace.call(this, location, res, rej);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
};
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true,
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isShow: false,
      }
    },
    {
      path: '/refister',
      component: Refister,
      meta: {
        isShow: false,
      }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: {
        isShow: true,
      },
      // 第一种方式：传递布尔值，当值为true，他会把该组件接收到的所以params参数以props方式传给Search组件
      // props:true
      //第二种返回函数
      props: ($routes) => ({ date: $routes.query })
    },
    // 路由重定向：将/根路由重定向到/home
    {
      path: '*',
      redirect: '/home'
    },
    {
      name: 'Detail',
      path: '/detail/:skuId',
      component: () => import('@/views/Detail')
    },
    {
      name: 'AddCartSuccess',
      path: '/addCartSuccess',
      component: () => import('@/views/AddCartSuccess')
    },
    {
      name: 'Shopcart',
      path: '/shopcart',
      component: () => import('@/views/ShopCart')
    }
  ],
  scrollBehavior () {
    // 始终滚动到顶部
    return { y: 0 };
  },
});
export default router;