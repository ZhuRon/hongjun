<template>
  <div id="app">
    <!-- <headera></headera> -->
    <!-- <router-link to="/">home</router-link> -->
    <!-- <router-link to="/login">登入界面</router-link> -->
    <!-- <router-link to="/HL">热榜</router-link>
    <router-link to="/HE">热评</router-link>
    <router-link to="/MS">资讯</router-link>
    <router-link to="/EP">智读</router-link> -->
    <!-- <keep-alive include="MC"><router-view></router-view></keep-alive>   信息表经常需要查看，所以用keep-alive保留缓存 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Headera from './components/header.vue'
export default {
  components: {
    // Header
  }
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
  #app
    margin 0
    padding 0
</style>