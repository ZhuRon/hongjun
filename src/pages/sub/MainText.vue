<template>
  <div>
    <Header :HeaderMes="HeaderMes"></Header>
    <div class="space"></div>
    <div class="main">
      <span class="title">{{title}}</span>
      <p class="time">{{day}} {{time}} {{week}}</p>
      <div class="author">
        <div class="profile"><img src=""></div>
        <p class="name">{{name}}</p>
        <div class="buttonArea">
          <div class="button" @click="forceIt()">{{force==0?"+关注":"取关"}}</div>
      </div>
      </div>
    <article>{{text}}</article>
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
      id: 123,
      force: 0,
      HeaderMes: {
        title: '正文',
        type: 1
      },
      title: '公开市场操作连续十一日暂停，今日无逆回购到期',
      day: '8-3',
      time: '10:30',
      week: '星期五',
      name: '央行动态',
      text: '周五（8月3日），央行连续11日暂停公开市场操作，今日无逆回购到期，本周净回笼2100亿元。央行周四公告称，目前银行体系流动性总量处于较高水平，可吸收?央行?逆回购到期等因素的影响，8月2日不开展公开市场操作。当日有300亿元逆回购到期，净回笼300亿元。银行间市场上，代表性的7天期回购利率再度跌至2.5%以下，与央行7天期逆回购操作利率形成倒挂。分析人士表示，现阶段流动性极为充裕，预计央行公开市场操作大概率将持续暂停至15日前。自7月19日开展1000亿元逆回购后，截至今日，央行已连续十一个交易日未开展公开市场操作，累计净回笼5800亿元。不过?央行?于上周一（7月23日）意外开展了5020亿元1年期中期借贷便利（MLF）操作。Wind统计数据显示，本周央行公开市场将有2100亿逆回购到期，周一至周五分别到期1300亿、300亿、200亿、300亿、0亿。隔夜，美债收益率普跌，中美贸易摩擦有升温迹象。两年期美债收益率跌1.5个基点，报2.663%。五年期美债收益率跌2个基点，报2.855%。10年期美债收益率跌2个基点，报2.986%。30年期美债收益率跌1.4个基点，报3.118%。中信固收?称，考虑到美国经济表现强劲，目前外部压力可能是阶段性高点，虽然长期来看难以持续，但阶段性风险不容忽视，所以短期内更加积极的放松政策稳内需，稳预期是一个必要选项。国君固收表示，过去两周低评级城投的上涨本质上是顿悟者的抢跑游戏，行情的持续性不会太久；对于投资者而言，在市场恢复流动性的时候，应该降低低评级城投的仓位，而非加仓；对于中低评级民企债，反而不必过度悲观。'
    }
  },
  created: function () {
    console.log(this.$route.params.id)
  },
  methods: {
    forceIt () {
      if (this.$data.force === 0) {
        this.$data.force = 1
      } else {
        this.$data.force = 0
      }
    }
  }
}
</script>

<style scoped>
.space {
  height: 0.18rem;
  width: 20rem;
  background-color: #eaeaea;
  margin-top: 0.106666rem;
  margin-left: -1rem;
}
.main{
  width: 9.107rem;
  margin-left: 0.52rem;
  padding-top: 0.6666667rem;
}
.title{
  font-size: 0.44rem;
}
.time{
  color: #8d8d8d;
  padding-bottom: 0.2rem;
}
.author{
  height:1.88rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color: #eaeaea;
  border-radius: 0.22rem;
}
.profile{
  width:1.3733333333rem;
  height: 1.37333333333333rem;
  border-radius: 50%;
  background-color: red;
}
.name{
  margin-left: 0.1rem;
  color: #4f8bfe;
  font-size: 0.4rem;
}
.buttonArea{
  flex:1;
  display:flex;
  justify-content:flex-end;
  align-items:center;
}
.button{
  height:0.54666666666666rem;
  width:1.133333333rem;
  text-align:center;
  line-height:.6rem;
  color:#fff;
  font-weight:bold;
  background-color:#ff4c4b;
  border-radius:0.12rem;
  margin-right: 0.186rem;
}

</style>
