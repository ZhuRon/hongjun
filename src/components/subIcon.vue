<template>
    <div class="dead_container">
        <div class="emotion"><img src="../common/image/emotion.png">{{count.emotion}}</div>
        <div class="comment"><img src="../common/image/comment.png">{{count.comment}}</div>
        <div class="star"><img src="../common/image/star.png">{{count.star}}</div>
    </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       count: {
//           emotion:93,
//           comment:165,
//           star:63
//       }
//     },
//   props: [ 'count' ]
//   }
// }
export default {
  data () {
    return {
    //   source: { name: '万科地产' }
    }
  },
  props: [ 'count' ]
}
</script>

<style scoped>
.dead_container{
  display: flex;
  justify-content:space-between;
  width:2.933333333rem;
}
img{
  height:0.3466666666667rem;
  width: 0.34666666667rem;
}
</style>
