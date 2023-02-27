import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
// 仓库存储数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
// 修改state的唯一手段
const mutations = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList){
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList){
    state.floorList = floorList;
  }
};
// 书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList({ commit }){
    let result = await reqCategoryList();
    if (result.code == 200){
      commit("CATEGORYLIST",result.data);
    }
  },
//获取首页轮播图的数据
  async getBannerList({ commit }){
    let result = await reqGetBannerList();
    if (result.code == 200){
      commit("GETBANNERLIST",result.data);
    }
  },
// 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200){
      commit("GETFLOORLIST",result.data);
    }
  }
};

//计算属性，简化仓库数据
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};