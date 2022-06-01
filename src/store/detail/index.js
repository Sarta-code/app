import { reqDetailList, reqAddOrUpdateShopcart } from '@/API';
import { getUUID } from '@/utils/uuid_token';

const state = {
    skuIdList: {},
    uuid_token: getUUID()
};
const mutations = {
    GETDETAILLIST (state, value) {
        state.skuIdList = value;
    }
};
const actions = {
    async getDetailList (context, value) {
        const result = await reqDetailList(value);
        if (result.code == 200) {
            context.commit('GETDETAILLIST', result.data);
        }
    },
    async AddOrUpdateshopcart (context, { skuId, skuNum }) {
        const result = await reqAddOrUpdateShopcart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
};
const getters = {
    categoryView (state) {
        // 返回导航栏
        return state.skuIdList.categoryView || {};
    },
    skuInfo (state) {
        return state.skuIdList.skuInfo || {};
    },
    spuSaleAttrList (state) {
        return state.skuIdList.spuSaleAttrList;
    }
};


export default {
    state,
    mutations,
    actions,
    getters,
};