import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HeroList from  './view/hero/HeroList.vue'
import HeroAdd from './view/hero/HeroAdd.vue'
import HeroEdit from './view/hero/HeroEdit.vue'
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
        {name:'equip',path:'/equip',component:EquipList},
        {name:'heroadd',path:'/hero/add',component:HeroAdd},
        {name:'heroedit',path:'/hero/edit/:id',component:HeroEdit,props:true}
    ]
})
export default router