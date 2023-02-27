import { reqGetSearchInfo } from '@/api'
// 仓库存储数据的地方
const state = {
  searchList: {},
}
// 修改state的唯一手段
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  },
}
// 书写自己的业务逻辑，也可以处理异步
const actions = {
  async getSearchList({ commit }, params) {
    let result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data)
    }
  },
}
//计算属性，简化仓库数据
const getters = {
  goodsList(state) {
    return state.searchList.goodsList||[]
  },
  trademarkList(state) {
    return state.searchList.trademarkList
  },
  //商品属性
  attrsList(state) {
    return state.searchList.attrsList
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
}
