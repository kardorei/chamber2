<template>
    <div class="w">
        <div class="wx bg">
            <a href="javascript:;">
                <img :src="srcPath" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['srcPath']
}
</script>

<style lang="less" scoped>
.bg {
    position: relative;
    height: 102px;
    background-color: #444;
    box-shadow: 0 0 5px 0 #222 inset;
    a {
        position: absolute;
        top: 51%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #000;
    }
}
</style>