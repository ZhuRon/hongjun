<template>
<div class="container">
<div class="tag" v-for="item in source" :key="item.id">  <span class="text">{{ item.name }}</span><div class="box"></div></div>
</div>
</template>

<script>
export default {
  data () {
    return {
    //   source: { name: '万科地产' }
    }
  },
  props: [ 'source' ]
}
</script>

<style scoped>
.container{display:flex;padding-top: 0.2666666rem;margin-left: 0.12rem;}
.tag{display: flex;margin-left: 0.36rem;}
.text{background-color:#4e8aff;height: 0.496666666667rem;color: #ffffff;}
.box{color:#4e8aff;}
.box:hover{color:blue;}
.box{width: 0.49333333333rem;height: 0.386666666667rem;border:2px solid ;text-align:center;line-height:200px;font-size:0;position:relative;-web-kit-transition: color .25s;}
.box:before{content:"";width: 0.37rem;height: 4.89rem;border-top:4px solid;display:inline-block;vertical-align:middle;}
.box:after{content:'';height: 0.333333333rem;;width: 0;border-left:4px solid;position:absolute;top:0.7px;bottom:0;left:0;right:0;margin:auto;}
</style>
