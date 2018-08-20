<template>
    <div>
      <Header :HeaderMes="HeaderMes"></Header>
    </div>
</template>
<script>
import Header from '@/components/header'
import tab from '@/components/tab'
export default {
  components: {
    Header,
    tab
  },
  data () {
    return {
      HeaderMes: {
        title: '智读'
      }
    }
  }
}
</script>

<style>

</style>
