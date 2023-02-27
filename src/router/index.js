import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// 使用插件
Vue.use(VueRouter);

let orginPush = VueRouter.prototype.push;
let orginReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resolve, reject){
  if(resolve && reject){
    orginPush.call(this,location, resolve, reject);
  } else{
    orginPush.call(this,location,()=>{},()=>{});
  }
}

VueRouter.prototype.replace = function(location, resolve, reject){
  if(resolve && reject){
    orginReplace.call(this, location, resolve, reject);
  }else{
    orginReplace.call(this, location, ()=>{}, ()=>{});
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
});

export default router;