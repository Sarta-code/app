import { reqSearchList } from '@/API';
const state = {
    searchList: {}
};
const mutations = {
    GTESEARCHLIST (state, value) {
        state.searchList = value;
    }
};
const actions = {
    async getSearchList (context, value) {
        const result = await reqSearchList(value);
        if (result.code == 200) {
            context.commit('GTESEARCHLIST', result.data);
        }
    }
};
const getters = {
    trademarkList (state) {
        return state.searchList.trademarkList;
    },
    attrsList (state) {
        return state.searchList.attrsList;
    },
    goodsList (state) {
        return state.searchList.goodsList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};
