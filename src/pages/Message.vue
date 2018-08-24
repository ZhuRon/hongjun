<template>
<div>
        <div class="space"></div>
   <div v-for="item in newsList" :key="item.id">
      <div style="padding-bottom:0.2933333rem;">
        <div class="items_head">
          <div class="item_head">
              <div class="item_head_photo"><img :src="img" ></div>
              <div class="item_head_text">
                <div class="item_head_name">{{item.source}}</div>
                <li>{{item.time}}</li>
            </div>
          </div>
          <img src="../common/image/letter.png" id="letter">
    </div>
    <div style="overflow:hidden;">
      <router-link :to="{name:'MainText',params: {id:item.url}}">
        <span class="main_title">【{{ item.title }}】{{item.summary}}</span>
      </router-link>
    </div>
    <tag :source="item.tags"></tag>
    <div class="deadline">
    <p>{{item.readnum}}次阅读</p>
    <subIcon :count="item.userfeed"></subIcon>
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
      newsList: [],
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3641064786,3874798264&fm=27&gp=0.jpg'
    }
  },
  mounted: function () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      // const https = require('https')
      const axios = require('axios')
      axios.get('http://61.135.195.37:8000/api/get_newsfeed')
        .then(response => {
          // console.log(response.data)
          // console.log(response.data.list)
          // var res = JSON.parse(response.data)
          this.newsList = response.data.list
        })
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
