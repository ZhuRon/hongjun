<template>
  <div style="overflow:hidden">
    <Header :HeaderMes="HeaderMes"></Header>
    <div class="space"></div>
    <div class="main">
      <span class="title">{{newsDetail.title}}</span>
      <p class="time">{{newsDetail.day}} {{newsDetail.time}} {{newsDetail.week}}</p>
      <div class="author">
        <div class="profile"><img :src="img"></div>
        <p class="name">{{newsDetail.source}}</p>
        <div class="buttonArea">
          <div class="button" @click="forceIt()">{{force==0?"+关注":"取关"}}</div>
      </div>
      </div>
    <article v-html="newsDetail.content"></article>
    </div>
    <div class="footer">
      <div class="bd">
        <input type="footer_bd_text" placeholder="说出你的看法">
      </div>
      <subIcon :count="count"></subicon>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import subIcon from '@/components/subIcon'
export default {
  components: {
    Header,
    subIcon
  },
  data () {
    return {
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3641064786,3874798264&fm=27&gp=0.jpg',
      count: { emotion: 963, comment: 696, star: 98 },
      force: 0,
      HeaderMes: {
        title: '正文',
        type: 1
      },
      newsDetail: {}
    }
  },
  // created: function () {
  //   console.log(this.$route.params.id)
  // },
  mounted: function () {
    this.getNewsDetail()
  },
  methods: {
    forceIt () {
      if (this.$data.force === 0) {
        this.$data.force = 1
      } else {
        this.$data.force = 0
      }
    },
    getNewsDetail () {
      const axios = require('axios')
      axios.get('http://61.135.195.37:8000/api/get_newsdetail', {
        params: {
          url: this.$route.params.id
        }
      })
        .then(response => {
          this.newsDetail = response.data.result
        })
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
  margin-bottom: 2.4rem;
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
  overflow: hidden;
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
article{
  font-size: 0.49rem;
  line-height: 0.8233333333333333333rem;
}
.footer{
  width:10rem;
  background-color: #ffffff;
  height: 1.28rem;
  position :fixed;
  display: flex;
  flex-direction :flex-start;
  justify-content: space-around;
  align-items :center;
  bottom: 0;
  left:0;
  border-top:0.02rem solid #9b9b9b;
}
.bd{
  height: 1rem;
  padding-top: 0.25rem;
}
input{
  background-color: #dbdbdb;
  height:0.65333333333333rem;
  width:5.133333333333333rem;
  border-radius:0.15rem;
  font-size:15px;
  padding-left:0.3rem;
  outline:none;
  border-width: 0;
}
.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
