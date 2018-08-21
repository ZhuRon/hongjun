<template>
    <div>
      <!-- <Header :HeaderMes="HeaderMes"></Header> -->
      <div class="space"></div>
      <div>
        <div class="items_head">
          <div class="item_head">
              <div class="item_head_photo"><img src="" ></div>
              <div class="item_head_text">
                <div class="item_head_name">上海证券交易所</div>
                <!-- <div class="item_times">
                  <div class="item_head_day">8-3</div>
                  <div class="item_head_time">12:15</div>
                </div> -->
                <li>8-3 12.15</li>
            </div>
          </div>
          <img src="../common/image/letter.png" id="letter">
    </div>
    <div>
      <span class="main_title">【比亚迪--季度净利  同比下降83% 在香港大跌5%】</span>
         <span class="sub_title">
         财联社4月30日讯，香港恒生指数涨幅扩大至1%，比亚迪股份（01211.HK）在香港跌逾4%，公司此前预计2018年1-6月归属上市公司股东的净利润3.00亿至5.00亿，同比变动-82.59%至-70.98%，汽车整车行业平均净利润增长率为-5.25%。
         </span>
    </div>
    </div>
    </div>
</template>

<script>
import Header from '@/components/header'
// import {apiname} from '../api/getData.js'
export default {
  components: {
    Header
  },
  name: 'MC',
  data () {
    return {
      HeaderMes: {
        title: '资讯'
      }
    }
  }
}
//  mounted () {
//  apiname()
//  .then(res => res.json())
//  .then(data => {
//  this.guessCityid = data.id
//  this.guessCity = data.name
//  })
//  }
//  采用async不用mounted更加优雅
</script>

<style>
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
  height: 1.66rem;
  width: 1.66rem;
  border-radius: 50%;
  background-color: red;
  overflow:hidden;
  margin-left: 0.533333rem;
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
  color: #4f8bff;
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
  margin-left: 2.12rem;
  margin-top: 0.826666666667rem;
}
li{
  list-style-type:none;
  color:#8d8d8d;
}
.main_title{
  font-size: 0.5rem;
}
.main_title,.sub_title{
  float:left;
  color:#0d0d0d;
  margin-left: 0.5rem;
  width: 9rem;
}
.sub_title{
  /* overflow: hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; */
  /* text-overflow: -o-ellipsis-lastline; */
  overflow: hidden;
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
