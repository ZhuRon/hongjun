<template>
  <div style="background-color:#f2f2f2;width:10rem">
    <Header :HeaderMes="HeaderMes"></Header>
    <div >
      <div class="body">
        <div class="index">
          <div class="data">
            <span>{{nowData}}</span><p>{{increaseData}}&nbsp;&nbsp;{{increase}}</p>
          </div>
        </div>
        <div class="wordCloud">词云</div>
        <div class="hot">热度</div>
        <div class="plate">板块</div>
        <div class="sub">副本</div>
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
        title: '海利生物',
        subtitle: '603718'
      },
      nowData: '9.61',
      increase: '0.84%',
      increaseData: '0.08'
    }
  }
}
</script>

<style scoped>
.body{
  width: 9.626666666666667rem;
  margin:0 auto;
}
.index,.wordCloud,.hot,.plate,.sub{
  width: 100%;
  background-color:#ffffff;
  border-radius: 0.2rem;
}
.index{
  height: 1.93333333333rem;
  margin-top: 0.18666666666667rem;
}
.wordCloud{
  height: 6.253333333333rem;
  margin-top: 0.24rem;
}
.hot{
  height: 10.293333333333333rem;
  margin-top: 0.133333333333333333rem;
}
.plate{
  height: 4.32rem;
  margin-top: 0.24rem;
}
.sub{
  height: 5rem;
  margin-top: 0.24rem;
}
.data{
  display: flex;
  flex-direction: column;
  width: 1.86666667rem;
  height: 1.467777777rem;
  padding-left: 0.3733333333rem;
  padding-top: 0.1rem;
}
.data span,.data p{
  color:#fd4341;
  font-weight: bolder;
}
.data span{
  text-align:center;
  font-size: 0.8rem;
}
</style>
