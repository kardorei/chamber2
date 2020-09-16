<template>
    <div>
        <table class="picTable">
            <tbody>
                <tr>
                    <td>
                        <a href="javascript:;">
                            <p></p>
                            <img :src="picArr[0].imgPath" alt="">
                            <span>{{picArr[0].title}}</span>
                        </a>
                    </td>
                    <td></td>
                    <td>
                        <a href="javascript:;">
                            <p></p>
                            <img :src="picArr[1].imgPath" alt="">
                            <span>{{picArr[1].title}}</span>
                        </a>
                    </td>
                    <td></td>
                    <td>
                        <a href="javascript:;">
                            <p></p>
                            <img :src="picArr[2].imgPath" alt="">
                            <span>{{picArr[2].title}}</span>
                        </a>
                    </td>
                    <td></td>
                    <td>
                        <a href="javascript:;">
                            <p></p>
                            <img :src="picArr[3].imgPath" alt="">
                            <span>{{picArr[3].title}}</span>
                        </a>
                    </td>
                </tr>
            </tbody>            
        </table>
    </div>
</template>

<script>
export default {
    props: ['picArr']
}
</script>

<style lang="less" scoped>
// 响应式宽度小于等于750px的样式修改
@media screen and (max-width: 750px) {
    .picTable{
        margin-top: 0!important;
        td:nth-of-type(odd) {
            height: 1.302083rem!important;
            span {
                font-size: 0.208333rem!important;
            }
        }
    }
}

.picTable {
    border-spacing: 0;
    overflow: hidden;
    margin-top: 8px;
    td:nth-of-type(odd) {
        width: 25%;
        height: 130px;
        a {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 3px #888;
            border-radius: 5px;
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
            span {
                box-sizing: border-box;
                position: absolute;
                width: 100%;
                bottom: 0;
                padding-left: 5px;
                color: #fff;
                font-size: 20px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                background: rgba(0, 0, 0, .3);
                border-radius: 0 0 5px 5px;
            }
            p {
                display: none;
            }
        }
        a:hover span {
            text-decoration: underline;
        }
    }
}

</style>