<template>
<div search>
    <div id="search">
        <input type="text" name="search" placeholder="点击搜索资讯">
        <div>  <img src="../common/image/sound.png"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #search{
        display:flex;
        width: 11.614358974358rem;
        margin-top: 0.46666666667rem;
        font-family: 'Microsoft YaHei';
        margin-bottom: -0.1rem;
    }
    img {
        height: 0.99066666666666667rem;
        width: 0.99666666666667rem;
        padding-left: 0.2rem;
    }
    input{
        /* margin-bottom: 0.46666666667rem; */
        margin-left: 0.46666666667rem;
        border-radius: 0.2rem;
        width: 6.724102564102667rem;
        background-color: #e0e0e0;
        border: 1px solid #e2e2e2;
        height: 0.7866666666666667rem;
        background-image: url('../common/image/search.png');
        background-repeat: no-repeat;
        background-size: 0.7641025641025rem;
        background-position:0.1528205128205rem center;
        padding:0 0 0 1.222564102564rem;
        outline:none;
    }
</style>
