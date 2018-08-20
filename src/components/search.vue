<template>
    <div id="box">
        <input type="text" name="search" placeholder="请输入关键字">
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #box{
        width: 380px;
        margin: 30px auto;
        font-family: 'Microsoft YaHei';
        font-size: 14px;
    }
    input{
        width: 260px;
        border: 1px solid #e2e2e2;
        height: 30px;
        float: left;
        background-image: url('../common/image/search.png');
        background-repeat: no-repeat;
        background-size: 25px;
        background-position:5px center;
        padding:0 0 0 40px;
    }
</style>
