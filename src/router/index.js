// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
// 声明使用插件
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onComplete,onAbort){
    if(onComplete || onAbort){
        originPush.call(this,location,onComplete,onAbort)
    }else{
        return originPush.call(this,location).catch((error)=>{
            return new Promise(()=>{})
        })
    }
}

VueRouter.prototype.replace = function(location,onComplete,onAbort){
    if(onComplete || onAbort){
        originReplace.call(this,location,onComplete,onAbort)
    }else{
        return originReplace.call(this,location).catch((error)=>{
            return new Promise(()=>{})
        })
    }
}

export default new VueRouter({
    mode:'history',
    routes,
})