<template>
<div>
    <div class="space"></div>
      <div>
          <div class="items_head">
          <div class="item_head">
              <div class="item_head_photo"><img src="" ></div>
              <div class="item_head_text">
              <div class="item_head_name">张文</div>
              <div class="item_times">
                  <div class="item_head_day">8-3</div>
                  <div class="item_head_time">10:05</div>
                </div>
          </div>
      </div>
      <div class="head_evaluate"><div class="top"><img src="../common/image/top.png">366 <img src="../common/image/down.png" style="padding-left: 0.386666666rem;">444
      </div></div>
    </div>
    </div>
    <div class="text"><p >中国企业历来就重营销，轻产品，但是产品是根本。苹果是在自己产品极为优秀的情况下，然后再来注重营销。换个角度想想，如果苹果店逼格那么高，买的</p>
</div>
 <div class="text_end">来自于 雪球--小罐茶三年成为茶行业第一到底是如何做到的</div>
 <HR width="90%" color=#eaeaea SIZE=1 class="hr"/>
</div>
</template>

<script>
export default {

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
.items_head {
  display: flex;
}
.item_head {
  height: 1.7333333rem;
  margin-top: 0.41333333rem;
  display: flex;
}
.item_head_photo {
  height: 1.36rem;
  width: 1.36rem;
  border-radius: 50%;
  background-color: red;
  overflow: hidden;
  margin-left: 0.533333rem;
}
.item_head_photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item_head_text {
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
.item_times {
  display: flex;
  justify-content: space-between;
}
.item_head_name {
  color: #ff4442;
  font-size: 0.45rem;
  margin-bottom: 0.1rem;
}
.item_head_day {
  margin-right: 0.16rem;
}
.item_head_day,
.item_head_time {
  color: #8d8d8d;
  font-size: 0.35rem;
}
.top {
  font-size: 0.3rem;
  margin-left: 2.6rem;
  margin-top: 0.64rem;
}
.top img{
  width: 0.426666667rem;
  height: 0.45333333rem;
}
.text p {
  font-size: 0.4rem;
  text-align: justify;
  margin-top: -0.0001rem;
}
.text {
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
.text_end {
  color: #4d8bff;
  font-size: 0.3rem;
  display: flex;
  width: 4.493333333rem;
  justify-content: flex-start;
  margin-left: 5.0133333rem;
  height: 0.266777777rem;
  padding-bottom: 0.82666666667rem;
}
.nav .information .chunk .text {
  width: 7.39333333333rem;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.hr {
  margin-left: 0.5rem;
}

</style>
