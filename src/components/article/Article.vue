<template>
    <div>
        <Head></Head>

        <!-- 帖子title -->
        <div class="wx">
            <div class="articleTitle">
                <div class="fl">
                    <div class="BN fl">
                        N G A
                    </div>
                    <div class="bmName fl">
                        <a href="javascript:;">大 漩 涡</a>
                    </div>
                    <div class="articleName fl">
                        <a href="javascript:;">{{mainFloor.title}}</a>
                    </div>
                </div>

                <div class="fr">
                    <div class="tool">
                        <div>
                            <a href="javascript:;">收藏</a>
                        </div>
                        <div>
                            <a href="javascript:;">发表回复</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主楼 -->
        <div class="wx">
            <div class="mainFloor">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span>
                                    <div class="userInfo">
                                        <a href="javascript:;">{{mainFloor.userInfo.name}}</a>
                                        <span>{{mainFloor.userInfo.id}}</span>
                                    </div>
                                </span>
                                <img :src="mainFloor.userInfo.headPhoto" class="hp">
                                <div class="userLv">
                                    <div>级别：<p>{{mainFloor.userInfo.level}}</p></div>
                                    <div>声望：<p>{{mainFloor.userInfo.shengwang}}</p></div>
                                    <div>注册：<p>{{mainFloor.userInfo.registerTime}}</p></div>
                                    <div>威望：<p>{{mainFloor.userInfo.weiwang}}</p></div>
                                </div>
                            </td>
                            <td>
                                <div class="contetntZan">
                                    <span class="zan">
                                        <a href="javascript:;" class="iconfont icon-zan"></a>
                                        <span>{{mainFloor.zan}}</span>
                                        <a href="javascript:;" class="iconfont icon-cai"></a>
                                    </span>
                                    <span class="contentTitle">
                                        <h3>{{mainFloor.title}}</h3>
                                    </span>
                                    <span class="fr time_tool">
                                        <span>{{mainFloor.time}}</span>
                                        <a href="javascript:;" class="iconfont icon-star_full"></a>
                                        <a href="javascript:;" class="iconfont icon-chilun"></a>
                                    </span>
                                </div>
                                <div class="articleContent" v-html="mainFloor.content">
                                    <!-- 主题内容 -->
                                </div>
                                <div class="editTime" v-if="mainFloor.editTime !== ''">
                                    <h4>改动</h4>
                                    <span>{{mainFloor.editTime}}</span>
                                </div>
                            </td>
                            <td>
                                <a href="javascript:;">
                                    <img src="https://ad-static-xg.tagtic.cn/ad-material/images/dzfOdJlchfsJqTsXLF5vgVC07JiAW1HHRXfd3mHk.png">
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 广告组件 -->
        <Bg class="bgh" srcPath="https://ad-static-xg.tagtic.cn/ad-material/images/QwsPMo81y0WFODUHlDyaaNgQi8zBFvGaEmai0uO9.jpeg"></Bg>
        
        <!-- 帖子的回复列表 -->
        <div class="wx">
            <div class="replay">
                <table>
                    <tbody>
                        <tr :class="index % 2 == 0 ? 'oddTr' : ''" v-for="(obj,index) in replayList" :key="index">
                            <td>
                                <span>
                                    <div class="userInfo">
                                        <a href="javascript:;">{{obj.userInfo.name}}</a>
                                        <span>{{obj.userInfo.id}}</span>
                                        <p> 
                                            <!-- 当前回复的楼层 = (当前页 - 1)*20 + 遍历的index值 + 1。20为每页显示数,index是从0开始所以加1 -->
                                            #{{(pageObj.currentPage - 1) * pageObj.pageNum + (index + 1)}}
                                        </p>
                                    </div>
                                </span>
                                <img :src="obj.userInfo.headPhoto" class="hp">
                                <div class="userLv">
                                    <div>级别：<p>{{obj.userInfo.level}}</p></div>
                                    <div>声望：<p>{{obj.userInfo.shengwang}}</p></div>
                                    <div>注册：<p>{{obj.userInfo.registerTime | formatDate('yyyy-MM-dd')}}</p></div>
                                    <div>威望：<p>{{obj.userInfo.weiwang}}</p></div>
                                </div>
                            </td>
                            <td>
                                <div class="contetntZan">
                                    <span class="zan">
                                        <a href="javascript:;" class="iconfont icon-zan"></a>
                                        <span>{{obj.zan}}</span>
                                        <a href="javascript:;" class="iconfont icon-cai"></a>
                                    </span>
                                    <span class="fr time_tool">
                                        <span>{{obj.time | formatDate('yyyy-MM-dd hh:mm:ss')}}</span>
                                        <a href="javascript:;" class="iconfont icon-star_full"></a>
                                        <a href="javascript:;" class="iconfont icon-chilun"></a>
                                    </span>
                                </div>
                                <div class="articleContent" v-html="obj.content">
                                    <!-- 回复内容 -->
                                </div>
                                <div class="editTime" v-if="obj.editTime !== ''">
                                    <h4>改动</h4>
                                    <span>{{obj.editTime | formatDate('yyyy-MM-dd hh:mm:ss')}}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 分页和操作栏 -->
        <div class="wx">
            <div class="pagination_tool">
                <div class="fl">
                    <Pagination :pageObj="pageObj" @getCurrentpage="getCPage($event)"></Pagination>
                </div>
                <div class="fr">
                    <div class="tool">
                        <div>
                            <a href="javascript:;">收藏</a>
                        </div>
                        <div>
                            <a href="javascript:;">发表回复</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 广告组件 -->
        <Bg class="bgh" srcPath="https://ad-static-xg.tagtic.cn/ad-material/images/nppVPkmltwYVYUGhkyEb5C7Xbg3d7a1lAeU4FEQV.gif"></Bg>

        <div class="wx fatieTitleH2">
            <h2>..:: 快速发帖 ::..</h2>
        </div>

        <!-- 回复帖子 -->
        <div class="wx">
            <div class="newBox replayBox">
                <div class="fl replayBoxL">
                    <input type="text">
                    <div>
                        <p>未激活的用户可绑定手机进行帐号激活 以在论坛发帖</p>
                        <p>请不要从任何途径购买论坛帐号 论坛备有详细的用户追踪记录 发现盗用帐号或违规激活会立即封禁</p>
                        <p>如果账号因安全问题而被锁定 请至银色黎明版查看相关说明</p>
                    </div>
                    <textarea></textarea>
                    <div class="sendReplay">
                        发表回复(Ctrl+Enter)
                    </div>
                </div>
                <div class="fr replayBoxR">
                    <a href="javascript:;">
                        <img src="https://ad-static-xg.tagtic.cn/ad-material/images/dzfOdJlchfsJqTsXLF5vgVC07JiAW1HHRXfd3mHk.png" alt="">
                    </a>
                </div>
            </div>
        </div>

        <!-- 底部组件 -->
        <Foot></Foot>
    </div>
</template>

<script>
// 引入头部组件
import Head from '../head/Head'
// 引入广告组件
import Bg from '../bg/Bg'
// 引入分页组件
import Pagination from '../pagination/Pagination'
// 引入底部组件
import Foot from '../foot/Foot'

export default {
    components: {
        Head,
        Bg,
        Pagination,
        Foot
    },
    data() {
        return {
            articleId: 0,
            articleTitle: '',
            pageObj: {
                currentPage: 1,
                pageNum: 20,
                totalCount: 700
            },

            // 主楼内容
            mainFloor: {
                userInfo: {
                    id: '',
                    name: '',
                    headPhoto: '',
                    registerTime: '',
                    shengwang: '',
                    weiwang: '',
                    level: ''
                }
            },
            // 回复列表
            replayList: []
        }
    },
    created() {
        let id = this.$route.query.id
        this.articleId = id
        console.log('当前帖子ID:' + this.articleId);

        this.getMainFloor()
        this.getArticleReplayList()

        // 页面从顶部开始
        window.parent.scrollTo(0, 0)
        
    },

    methods: {
        // 点击分页栏后获取到修改后的当前页值
        getCPage(val) {
            this.pageObj.currentPage = val
            console.log(this.pageObj.currentPage);
        },

        getMainFloor() {
            let path = ''
            if(this.articleId == 1) {
                path = './article/main.json'
            } else {
                path = './article/main2.json'
            }
            this.$axios.get(path).then(({data}) => {
                this.mainFloor = data
            })
        },

        getArticleReplayList() {
            let path = ''
            if(this.articleId == 1) {
                path = './article/replay.json'
            } else {
                path = './article/replay2.json'
            }

            this.$axios.get(path).then(({data}) => {
                this.replayList = data
            })
        },

    }
}
</script>

<style lang="less" scoped>
// 响应式宽度小于等于750px的样式修改
@media screen and (max-width: 750px) {
    .articleTitle {
        height: 0.572917rem!important;
        .BN,
        .bmName,
        .tool {
            display: none;
        }
        .articleName {
            font-size: 0.208333rem!important;
            padding: 0.125rem 0.052083rem!important;
        }
    }

    .bgh {
        display: none;
    }

    .mainFloor {
        img {
            display: none;
        }
        tr {
            display: flex;
            flex-direction: column;
            td:last-child {
                display: none;
            }
            td {
                width: 100%!important;
                flex: 1;
            }
        }
        .contentTitle {
            h3 {
                display: none;
            }
        }
    }

    .replay {
        img {
            display: none;
        }
        tr {
            display: flex;
            flex-direction: column;
            td {
                width: 100%!important;
                flex: 1;
            }
        }
    }

    .tool {
        a {
            height: 0.625rem!important;
            padding: 0 0.15625rem!important;
            line-height: 0.625rem!important;
            font-size: 0.260417rem!important;
        }
    }

    .replayBox {
        .replayBoxR {
            display: none;
        }

        .sendReplay {
            width: 30%!important;
            text-align: center;
            padding: 0.15625rem 0.104167rem!important;
            margin: 20px 0 0 47%;
            font-size: 0.15625rem!important;
        }
    }
}

.articleTitle {
    height: 50px;
    margin: 8px 0;
    .BN {
        font-size: 15px;
        font-weight: 700;
        background-color: var(--themColor);
        color: #fff;
        padding: 15px 8px;
        border-radius: 3px;
        box-shadow: 0 0 6px -3px #000;
        margin-right: 8px;
    }
    .bmName,
    .articleName {
        font-size: 16px;
        padding: 12.2px 8px;
        border: 1px solid #fffcee;
        border-radius: 3px;
        font-weight: 600;
        background-color: #fff0cd;
        box-shadow: 0 0 6px -3px #000;
        margin-right: 8px;
    }
    a {
        color: var(--themColor);
    }

    a:hover {
        text-decoration: underline;
        color: #b87563!important;
    }

    .tool {
        overflow: hidden;
        border: 1px solid #cacaca;
        box-shadow: 0 0 5px -3px #000;
        border-radius: 2.5px;
        padding: 1px;
        background-color: #fff;
        div {
            float: left;
            a {
                display: block;
                height: 44px;
                padding: 0 15px;
                line-height: 45px;
                font-size: 19px;
                font-weight: bold;
                color: #888;
                border-right: 1px solid #ead5bc;
                background-color: #fff0cd;
            }
        }
        div:last-child a {
            border: none;
            color: var(--themColor);
        }
    }
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    tr {
        border-bottom: 0.1px solid #fff;
        td {
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
            background-color: #fff0cd;
            padding: 5px;
            vertical-align: top;
        }
        td:first-child {
            width: 20%;
            background-color: #ffedc3;
        }
    }
    
}

.oddTr {
    td {
        background-color: #fff8e7;
    }
    td:first-child {
        background-color: #fff6df;
    }
}

.mainFloor {
    background-color: #fff;
    padding: 1px 0;
    td:last-child {
        width: 7%;
        padding: 5px;
        background-color: rgb(68, 68, 68);
        img {
            border: 1px solid #000;
        }
    }
}

.userInfo {
    text-align: left;
    padding: 2px;
    margin-bottom: 5px;
    a {
        color: #1a3959;
        font-weight: bold;
        margin-right: 10px;
        font-size: 15px;
    }
    a:hover {
        text-decoration: underline;
    }
    span {
        font-size: 13px;
        color: #fff;
        background-color: #aaa;
        padding: 1px 5px;
        border-radius: 3px;
    }
    p {
        float: right;
        margin: 0;
        padding: 1px 5px;
        background-color: var(--themColor);
        color: #fff;
        border-radius: 3px;
    }
}

.hp {
    border: 1px solid #591804;
}

.userLv {
    overflow: hidden;
    width: 98%;
    margin-top: 5px;
    padding: 2px;
    border: 1px solid #fff;
    text-align: left;
    div {
        color: #555;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        p {
            display: inline;
            margin: 0;
            color: #888;
        }
    }
    div:nth-child(1) {
        float: left;
        width: 49%;
        margin-bottom: 3px;
    }

    div:nth-child(2) {
        float: right;
        width: 49%;
        margin-bottom: 3px;
    }

    div:nth-child(3) {
        float: left;
        width: 49%;
    }

    div:nth-child(4) {
        float: right;
        width: 49%;
    }
}

.contetntZan {
    text-align: left;
    padding: 5px;
    overflow: hidden;
    .zan {
        display: inline-block;
        background-color: #e0c19e;
        padding: 2px 7px 2px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        a {
            float: left;
            color: #fff;
        }
        .icon-cai {
            float: right;
            margin-top: 1px;
        }
        span {
            display: inline-block;
            margin: 0 3px;
        }
    }
    .time_tool {
        span {
            color: #888;
            padding-right: 20px;
        }
        a {
            display: inline-block;
            margin-left: 15px;
            background-color: #591804;
            padding: 2px 7px;
            border-radius: 3px;
            font-size: 12px;
            color: #fff;
        }
    }
}

.contentTitle {
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: #10273f;
    h3 {
        position: absolute;
        padding-left: 5px;
        top: -7%;
        margin: 0;
        display: inline-block;
        white-space: nowrap;
        // white-space: pre-wrap;
        overflow: hidden;
    }
}

.articleContent {
    text-align: left;
    padding: 30px 0 40px;
    font-size: 15px;
    color: #10273f;
}

.editTime {
    width: 100%;
    bottom: 5%;
    text-align: left;
    color: #888;
    margin-bottom: 5px;
    h4 {
        margin: 0;
        margin-bottom: 5px;
        font-size: 16px;
        border-bottom: 1px solid #888;
    }
    span {
        padding: 2px 5px;
        font-size: 14px;
        background-color: #ead5bc;
        border-radius: 5px;
    }
}

.pagination_tool {
    overflow: hidden;
    margin: 8px 0;
    .tool {
        overflow: hidden;
        border: 1px solid #cacaca;
        box-shadow: 0 0 5px -3px #000;
        border-radius: 2.5px;
        padding: 1px;
        background-color: #fff;
        div {
            float: left;
            a {
                display: block;
                height: 44px;
                padding: 0 15px;
                line-height: 45px;
                font-size: 19px;
                font-weight: bold;
                color: #888;
                border-right: 1px solid #ead5bc;
                background-color: #fff0cd;
            }
        }
        div:last-child a {
            border: none;
            color: var(--themColor);
        }
    }
    a {
        color: var(--themColor);
    }

    a:hover {
        text-decoration: underline;
        color: #b87563!important;
    }
}

.fatieTitleH2 {
    color: var(--themColor);
    padding-left: 15px;
}

.replayBox {
    overflow: hidden;
    .replayBoxL {
        box-sizing: border-box;
        width: 93%;
        padding: 7px;
        input {
            width: 80%;
            height: 22px;
            border: 1px solid #e0c19e;
            box-shadow: 0 0 2px 0 #bbb inset;
            border-radius: 0.25em;
            background: #fffcee;
            color: #10273f;
        }
        p {
            margin: 5px 0;
            font-size: 13px;
            color: #10273f;
        }
        textarea {
            width: 95%;
            height: 202px;
            margin-top: 3px;
            border: 1px solid #e0c19e;
            box-shadow: 0 0 2px 0 #bbb inset;
            border-radius: 5px;
            background-color: #fffcee;
        }
        .sendReplay {
            overflow: hidden;
            width: 11.5%;
            padding: 10px 20px;
            margin: 20px 0 0 47%;
            border: 1px solid #ead5bc;
            font-size: 18px;
            font-weight: bold;
            color: #591804;
            background-color: #fff0cd;
            border-radius: 2px;
            box-shadow: 0 0 3px 1px #fff inset;
            white-space: nowrap;
            cursor: pointer;
        }
    }
    .replayBoxR {
        width: 7%;
        text-align: center;
        background-color: rgb(68, 68, 68);
        padding-top: 5px;
        img {
            border: 1px solid #000;
        }
    }
}

</style>