// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {menu} from "element-ui";
//vuex
import Vuex from "vuex";


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(menu)

//创建store
const store = new Vuex.Store({
  state:{
    logState:false
  },
  computed:{
    logState(){
      return store.state.logState;
    }
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
let a =new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
