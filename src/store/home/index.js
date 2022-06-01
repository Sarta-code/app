import { reqCategoryList, reqBannerList, reqFloorList } from '@/API';

// 存储数据
const state = {
    // 接受列表数据
    categoryList: [],
    // 接受banner信息
    bannerList: [],
    // floor数据
    floorList: []
};
const mutations = {
    CATEGORYLISST (state, value) {
        state.categoryList = value;
    },
    GETBANNERLIST (state, value) {
        state.bannerList = value;
    },
    GETFLOORLIST (state, value) {
        state.floorList = value;
    }
};
const actions = {
    // actions里面发送请求是最合适的
    async categoryList (context) {
        const result = await reqCategoryList();
        if (result.code == 200) {
            // 数组数据过长，对页面有影响，暂时丢掉多余的两个数据
            if (result.data.length > 15) {
                context.commit('CATEGORYLISST', result.data.slice(0, 15));
            } else {
                context.commit('CATEGORYLISST', result.data);
            }
        } else {
            alert("抱歉！列表数据请求失败");
        }
    },

    async getBannerList (context) {
        const result = await reqBannerList();
        if (result.code == 200) {
            context.commit('GETBANNERLIST', result.data);
        }
    },
    async getFloorList (context) {
        const result = await reqFloorList();
        if (result.code == 200) {
            context.commit('GETFLOORLIST', result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};