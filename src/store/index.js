import Vue from "vue";
import vuex from "vuex";

import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';

Vue.use(vuex);
export default new vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart
    }
});