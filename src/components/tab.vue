<template>
<div>
    <search></search>
    <tab :line-width="5" custom-bar-width="0.8rem" active-color="#ff4442">
      <tab-item ><router-link to="/MS">资讯</router-link></tab-item>
      <tab-item ><router-link to="/EP">智读</router-link></tab-item>
      <tab-item ><router-link to="/HE">热评</router-link></tab-item>
      <tab-item ><router-link to="/HL">热榜</router-link></tab-item>
    </tab>
</div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import search from './search'
export default {
  components: {
    Tab,
    TabItem,
    search
  }
}
</script>

<style lang="stylus" scoped>
a {
text-decoration: none;
color #464646
}
.router-link-active {
    color #ff4442
}
</style>
