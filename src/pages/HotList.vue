<template>

<div>
     <!-- <Header :HeaderMes="HeaderMes"></Header> -->
     热榜
</div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data () {
    return {
      HeaderMes: {
        title: '热榜'
      }
    }
  }
}
</script>

<style>

</style>
