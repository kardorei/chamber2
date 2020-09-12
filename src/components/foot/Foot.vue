<template>
    <div class="wx">
        <div class="foot">
            <p>
                商务市场合作: BD@donews.com , 
                内容合作: wangchuang@donews.com / QQ 972310705 , 
                违法和不良信息举报电话: 010-60845018 邮箱: jubao@infinities.com.cn , 
                <a href="https://www.12377.cn">网上有害信息举报专区</a>
            </p>
            
            <p class="end">
                <a href="http://beian.miit.gov.cn">京ICP备16021487号-5</a>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802027588">京公网安备11010802027588号</a>
                <span>
                    <a href="javascript:;">
                        <img src="https://rr.knet.cn/static/images/logo/hy.png" alt="">
                    </a>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.foot {
    text-align: center;
    padding: 50px 0 20px;
    color: #888;
    a {
        color: gray;
    }
    a:hover {
        text-decoration: underline;
        color: #aaa;
    }
    p {
        margin: 0;
    }
    .end {
        display: inline-block;
        position: relative;
        span {
            position: absolute;
            right: -125px;
            top: 0;
            img {
                width: 30%;
            }
            img:hover {
                width: 80%;
            }
            span:hover {
                position: absolute;
                top: -50px;
            }
        }
    }
}

.foot:hover {
    color: #aaa;
}
</style>