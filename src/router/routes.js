import Home from '@/pages/Home/home.vue'
import Search from '@/pages/Search/search.vue'
import Login from '@/pages/Login/login.vue'
import Register from '@/pages/Register/register.vue'
import Detail from '@/pages/Detail'

export default 
[
  {
    path: '/home',
    component: Home,
    meta: {show:true}
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: {show:true},
    name: 'search',
  },
  {
    path: '/login',
    component: Login,
    meta: {show:false}
  },
  {
    path: '/register',
    component: Register,
    meta: {show:false}
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: {show:true}
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]