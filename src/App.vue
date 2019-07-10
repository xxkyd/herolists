<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
    <div class="row">
      <app-silder></app-silder>
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSilder from './components/AppSilder'
export default {
  // 注册AppHeader组件
  components:{
    AppHeader,
    AppSilder
  }
}
</script>

<style>

</style>
