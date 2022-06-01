import { reqShopcartList } from "@/API";

const state = {
    shopCar: []
};
const mutations = {
    GETCARTLIST (state, value) {
        state.shopCar = value;
    }
};
const actions = {
    async getCartList (context) {
        const result = await reqShopcartList();
        if (result.code == 200) {
            context.commit('GETCARTLIST', result.data);
        }
    }
};
const getters = {
    cartList (state) {
        return state.shopCar[0] || {};
    }
};



export default {
    state,
    mutations,
    actions,
    getters,
};
