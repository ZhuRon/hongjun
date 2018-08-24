<template>
    <div style="margin-top:0.1rem;">
       <swiper :list="img" auto loop style="margin:0 auto;" height="4rem" dots-class="custom-bottom" dots-position="center"></swiper>
       <p class="dataSpan">{{dataTime}}</p>
       <div v-for="item in main" :key="item.id">
        <div class="container">
          <span class="main_title"><span style="color:#ff4344">{{item.day}}</span> {{item.text}}</span>
        </div>
          <tag :source="item.source"></tag>
          <subIcon style="width:3.02666667rem;margin-left: 6.5rem;padding-bottom: 0.32rem;" :count="item.count"></subIcon>
          <HR width="90%" color=#eaeaea SIZE=1 class="hr"/>
      </div>
    </div>
</template>
<script>
import { Swiper } from 'vux'
import tab from '@/components/tab'
import tag from '@/components/tag'
import subIcon from '@/components/subIcon'
export default {
  components: {
    tab,
    Swiper,
    tag,
    subIcon
  },
  data () {
    return {
      dataTime: '2018-08-06 星期一',
      img: [{
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1775613477,3353410535&fm=200&gp=0.jpg',
        title: '央行连续11日暂停公开市场操作'
      },
      {
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1775613477,3353410535&fm=200&gp=0.jpg',
        title: '央行连续11日暂停公开市场操作'
      },
      {
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1775613477,3353410535&fm=200&gp=0.jpg',
        title: '央行连续11日暂停公开市场操作'
      }],
      main: [{
        day: '9:15',
        text: '【人民币兑美元中间价调降0.28%至6.8513】人民币兑美元中间价报6.8513，下调191点，上一交易日中间价6.8322；中间价贬值至2017年5月31日以来最低。央行上周五宣布将远期售汇业务的外汇风险准备金率从零调整为20%，以支撑人民币汇率。 ​​​​',
        source: [{ 'name': '比亚迪' }, { 'name': '人民币大新闻' }],
        count: { emotion: 323, comment: 165, star: 365 }
      },
      {
        day: '9:11',
        text: '新浪财经讯 8月6日，央行连续第12个交易日未开展逆回购操作，因今日无逆回购到期，当日实现零投放零回笼。 ​​​​',
        source: [{ 'name': '比亚迪' }, { 'name': '中国央行动态' }],
        count: { emotion: 363, comment: 362, star: 310 }
      },
      {
        day: '9:15',
        text: '【人民币兑美元中间价调降0.28%至6.8513】人民币兑美元中间价报6.8513，下调191点，上一交易日中间价6.8322；中间价贬值至2017年5月31日以来最低。央行上周五宣布将远期售汇业务的外汇风险准备金率从零调整为20%，以支撑人民币汇率。 ​​​​',
        source: [{ 'name': '比亚迪' }, { 'name': '人民币大新闻' }],
        count: { emotion: 323, comment: 165, star: 365 }
      },
      {
        day: '9:11',
        text: '新浪财经讯 8月6日，央行连续第12个交易日未开展逆回购操作，因今日无逆回购到期，当日实现零投放零回笼。 ​​​​',
        source: [{ 'name': '比亚迪' }, { 'name': '中国央行动态' }],
        count: { emotion: 363, comment: 362, star: 310 }
      }]
    }
  }
}
</script>

<style scoped>
.dataSpan{
  background-color:#eaeaea;
  padding:2px;
  padding-left:0.4rem;
}
.container{
  overflow:hidden;
  display:flex;
  padding-top:0.52rem;
}
.main_title{
  font-size: 0.35rem;
  overflow: hidden;
  float:left;
  color:#0d0d0d;
  margin-left: 0.5rem;
  width: 9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.deadline{
  margin-left: 6.5rem;
}
.hr{
  margin-left: 0.4rem;
}
</style>
