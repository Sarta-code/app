<template>
  <div id="app">
    <!-- 头部组件 -->
    <Header />
    <router-view></router-view>
    <!-- 底部组件 -->
    <Footer v-show="$route.meta.isShow" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
    mounted() {
        // 在此请求列表信息，避免重复请求
        this.$store.dispatch('categoryList');
    },
};
</script>

<style></style>
