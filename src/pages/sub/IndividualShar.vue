<template>
  <div>
    <Header :HeaderMes="HeaderMes"></Header>
    <div style="background-color: #f2f2f2;width:10rem">
      <div class="body">

      </div>
    </div>
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
        title: '海利生物'
      }
    }
  }
}
</script>

<style scoped>
.body{
  width: 9.626666666666667rem;
  margin:0 auto;
}
</style>
