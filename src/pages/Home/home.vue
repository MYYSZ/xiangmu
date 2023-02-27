<template>
  <div>
    <!-- 三级联动全局组件 三级联动已经注册为全局组件，不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/list.vue'
import Recommend from '@/pages/Home/Recommend/recommend.vue'
import Rank from '@/pages/Home/Rank/rank.vue'
import Floor from '@/pages/Home/Floor/floor.vue'
import Brand from '@/pages/Home/Brand/brand.vue'
import Like from '@/pages/Home/Like/like.vue'
import { mapState } from 'vuex'

export default {
  name:'',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Floor,
    Brand,
    Like
  },
  mounted(){
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    })
  }
}
</script>

<style lang="less" scoped>

</style>