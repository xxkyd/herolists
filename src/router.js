import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HeroList from  './view/hero/HeroList.vue'
// 武器
import WeaponList from './view/weapon/WeaponList.vue'
// 装备
import EquipList from './view/equip/EquipList.vue'
const router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {path:'/',redirect:'hero'},
        {name:'hero',path:'/hero',component:HeroList},
        {name:'weapon',path:'/weapon',component:WeaponList},
        {name:'equip',path:'/equip',component:EquipList}
    ]
})
export default router