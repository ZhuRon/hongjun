<template>
  <div>
    <scroller lock-x scrollbar-y use-pullup use-pulldown height="13.97332rem" @on-pullup-loading="loadup"
     @on-pulldown-loading="loaddown" ref="demo" 
     :pullup-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'',loadingContent:'加载中'}" 
     :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}">
      <div class="box">
       <slot></slot>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from 'vux'
export default {
  components: {
    Scroller,
    Divider,
    Spinner
  },
  methods: {
    loadup () {
      setTimeout(() => {
        setTimeout(() => {
          this.$refs.demo.donePullup()
        }, 100)
      }, 2000)
    },
    loaddown () {
      setTimeout(() => {
        console.log('loading success!')
        this.$refs.demo.donePulldown()
      }, 100)
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.pullup-arrow {
  display: block;
  transition: all linear 0.2s;
  -webkit-transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>