<template>
  <div>
    <Header :HeaderMes="HeaderMes"></Header>
    <div class="space"></div>
    <div class="main">
      <span class="title">{{newsDetail.title}}</span>
      <p class="time">{{newsDetail.day}} {{newsDetail.time}} {{newsDetail.week}}</p>
      <div class="author">
        <div class="profile"><img src=""></div>
        <p class="name">{{newsDetail.source}}</p>
        <div class="buttonArea">
          <div class="button" @click="forceIt()">{{force==0?"+关注":"取关"}}</div>
      </div>
      </div>
    <article v-html="newsDetail.content"></article>
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
      newsDetail: {}
    }
  },
  created: function () {
    console.log(this.$route.params.id)
  },
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
