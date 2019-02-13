import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Home from "../components/home/index";

//关于我组件
import Me from "../components/aboutme/Me";
//作品列表组件
import Work from "../components/work/index";
import Jslist from "../components/work/Jslist";
import Framelist from "../components/work/Framelist";
//生活组件
import Life from "../components/life/index";
import Photo from "../components/life/photo";
import Diary from "../components/life/diary";
//用户登录
import Login from "../components/login/login";
//后台界面
import Admin from "../components/admin/index";
import Adperson from "../components/admin/adPerson/adperson";
import Javascript from "../components/admin/worklist/javascript";
import Framework from "../components/admin/worklist/frame";
import WorkList from "../components/admin/worklist/work";
import LifeList from "../components/admin/life/index";
import Adphoto from "../components/admin/life/photo";
import Addiary from "../components/admin/life/diary";
import Advip from "../components/admin/vip/index";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path:'/',
          name:'home',
          component:Home
        },
        {
          path:'me',
          name:"me",
          component: Me
        },
        {
          path:'/work',
          name:"work",
          component:Work,
          children: [
            {
              path:"js",
              name:"js",
              component:Jslist,
            },
            {
              path:"frame",
              name:"frame",
              component:Framelist,
            },
          ]
        },
        {
          path:'/life',
          name:"life",
          component:Life,
          children:[
            {
              path:'photo',
              name:"photo",
              component:Photo,
            },
            {
              path:'diary',
              name:"diary",
              component:Diary
            }
          ]
        },
        {
          path:'/login',
          name:'login',
          component:Login,
        },
      ]
    },
    {
      path:'/admin',
      name:"admin",
      component:Admin,
      children:[
        {
          path:'personinfo',
          name:'personinfo',
          component:Adperson
        },
        {
          path:'worklist',
          name:"worklist",
          component:WorkList,
          children:[
            {
              path:"js",
              name:"jswork",
              component:Javascript,
            },
            {
              path:'frame',
              name:'framework',
              component:Framework,
            }
          ]
        },
        {
          path:'life',
          name:'LifeList',
          component:LifeList,
          children:[
            {
              path:'photo',
              name:'ad-photo',
              component:Adphoto
            },
            {
              path:'diary',
              name:'ad-diary',
              component:Addiary,
            }
          ]
        },
        {
          path:'vip',
          name:'ad-vip',
          component:Advip,
        }
      ]
    }


  ]
})
