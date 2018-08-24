<template>
<div>
        <div class="space"></div>
   <div v-for="item in mains" :key="item.id">
      <div style="padding-bottom:0.2933333rem;">
        <div class="items_head">
          <div class="item_head">
              <div class="item_head_photo"><img src="" ></div>
              <div class="item_head_text">
                <div class="item_head_name">{{item.name}}</div>
                <li>{{item.day}} {{item.time}}</li>
            </div>
          </div>
          <img src="../common/image/letter.png" id="letter">
    </div>
    <div style="overflow:hidden;">
      <router-link :to="{name:'MainText',params: {id:item.name}}">
        <span class="main_title">{{item.text}}</span>
      </router-link>
    </div>
    <tag :source="item.source"></tag>
    <div class="deadline">
    <p>{{item.times}}次阅读</p>
    <subIcon :count="item.count"></subIcon>
    </div>
    </div>
    <HR width="90%" color=#eaeaea SIZE=1 class="hr"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import tag from '@/components/tag'
import subIcon from '@/components/subIcon'
export default {
  components: {
    Header,
    tag,
    subIcon
  },
  name: 'MC',
  data () {
    return {
      mains: [{
        name: '上海证券交易所',
        day: '8-3',
        time: '12.15',
        text: '【比亚迪--季度净利  同比下降83% 在香港大跌5%】 财联社4月30日讯，香港恒生指数涨幅扩大至1%，比亚迪股份（01211.HK）在香港跌逾4%，公司此前预计2018年1-6月归属上市公司股东的净利润3.00亿至5.00亿，同比变动-82.59%至-70.98%，汽车整车行业平均净利润增长率为-5.25%。',
        times: '2036',
        source: [{ 'name': '比亚迪' }, { 'name': '新能源汽车' }, { 'name': '贸易战' }],
        count: { emotion: 93, comment: 165, star: 63 }},
      {
        name: '券商中国',
        day: '8-3',
        time: '11.43',
        text: '【万科A：中兴通讯深圳湾超级总部基地项目未受影响】 财联社4月29日讯，万科A在投资者互动平台回应“受委托开发的中兴通讯深圳湾超级总部基地项目是否受到中兴事件影响”时表示，相关项目目前来看未受影响。',
        times: '1800',
        source: [{ 'name': '中兴通讯' }, { 'name': '万科地产' }, { 'name': '半导体' }],
        count: { emotion: 186, comment: 653, star: 63 }},
      {
        name: '上海证券交易所',
        day: '8-3',
        time: '12.15',
        text: '【比亚迪--季度净利  同比下降83% 在香港大跌5%】 财联社4月30日讯，香港恒生指数涨幅扩大至1%，比亚迪股份（01211.HK）在香港跌逾4%，公司此前预计2018年1-6月归属上市公司股东的净利润3.00亿至5.00亿，同比变动-82.59%至-70.98%，汽车整车行业平均净利润增长率为-5.25%。',
        times: '2036',
        source: [{ 'name': '比亚迪' }, { 'name': '新能源汽车' }, { 'name': '贸易战' }],
        count: { emotion: 93, comment: 165, star: 63 }},
      {
        name: '券商中国',
        day: '8-3',
        time: '11.43',
        text: '【万科A：中兴通讯深圳湾超级总部基地项目未受影响】 财联社4月29日讯，万科A在投资者互动平台回应“受委托开发的中兴通讯深圳湾超级总部基地项目是否受到中兴事件影响”时表示，相关项目目前来看未受影响。',
        times: '1800',
        source: [{ 'name': '中兴通讯' }, { 'name': '万科地产' }, { 'name': '半导体' }],
        count: { emotion: 186, comment: 653, star: 63 }}
      ]
    }
  }
}
</script>

<style scoped>
.space{
  height: 0.18rem;
  width: 20rem;
  background-color: #eaeaea;
  margin-top: 0.106666rem;
  margin-left: -1rem;
}
.items_head{
  display: flex;
}
.item_head{
  height: 1.7333333rem;
  margin-top: 0.41333333rem;
  display: flex;
}
.item_head_photo{
  height: 0.76rem;
  width: 0.76rem;
  border-radius: 50%;
  background-color: red;
  overflow:hidden;
  margin-left: 0.533333rem;
  margin-top: 0.3rem;
}
.item_head_photo img{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.item_head_text{
  display: flex;
  flex-direction:column;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
.item_times{
  display: flex;
  justify-content:space-between;
}
.item_head_name{
  color: #474747;
  font-size: 0.45rem;
  margin-bottom: 0.1rem;
  width:4rem;
}
/* .item_head_day{
  margin-right: 0.16rem;
}
.item_head_day,.item_head_time{
  color: #8d8d8d;
  font-size: 0.35rem;
} */
#letter{
  height: 0.28666666667rem;
  width: 0.44rem;
  margin-left: 3.4rem;
  margin-top: 0.826666666667rem;
}
li{
  list-style-type:none;
  color:#8d8d8d;
}
.main_title{
  font-size: 0.35rem;
  overflow: hidden;
  float:left;
  color:#0d0d0d;
  margin-left: 0.5rem;
  width: 9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.deadline{
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  padding-left: 0.48rem;
  width: 9rem;
}
.hr{
  margin-left: 0.4rem;
}
p{
  color:#8c8c8c;
}
</style>
