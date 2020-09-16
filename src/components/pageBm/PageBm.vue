<template>
    <div>
        <Head></Head>

        <!-- 版面的title部分 -->
        <div class="wx">
            <div class="bmTitle">
                <div class="fl">
                    <div class="BN fl">
                        N G A
                    </div>
                    <div class="bmName fl">
                        <a href="javascript:;">大 漩 涡</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 版面的分页与工具栏 -->
        <div class="wx">
            <div class="pagination_tool">
                <div class="fl">
                    <Pagination :pageObj="pageObj" @getCurrentpage="getCPage($event)"></Pagination>
                </div>
                <div class="fr">
                    <div class="tool">
                        <div>
                            <a href="javascript:;">精华区</a>
                        </div>
                        <div>
                            <a href="javascript:;">收藏版面</a>
                        </div>
                        <div>
                            <a href="javascript:;">发表新帖</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 版头信息 -->
        <div class="wx">
            <div class="newBox bmHead">
                <!-- 头部 -->
                <div class="bmHead_title">
                    <span>网事杂谈</span>
                    <a href="javascript:;">我的水就是你的水……杂谈区 定时冲水 老贴无法浏览 博物馆已重新开启</a>
                </div>
                <!-- 主题 -->
                <div class="bmHead_body">
                    <table>
                        <tbody>
                            <!-- 表格头部 -->
                            <tr class="tabTitle">
                                <td>本版需知</td>
                                <td>版务公告</td>
                                <td rowspan="2">
                                    <span>
                                        <img src="https://img.nga.178.com/attachments/mon_202006/03/-914q0Q5-7r39K17T1kSdr-4w.png" alt="">
                                    </span>
                                    <p>NGA玩家社区网事杂谈版面(FID：-7)</p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">NGA玩家社区(NGA.CN)通用版规</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">网事杂谈版规</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">网事杂谈临时版规汇总</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                                <td>杂谈精选</td>
                                <td>博物馆</td>
                            </tr>
                            <!-- 表格主题 -->
                            <tr class="tabBofy">
                                <td>
                                    <!-- 公共1 -->
                                    <span v-html="ggOne.content">
                                        <!-- 富文本内容 -->
                                    </span>
                                </td>
                                <td>
                                    <!-- 公共2 -->
                                    <p v-for="(item,index) in ggtwo" :key="index">
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">{{item.content}}</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                                <td>
                                    <!-- 公共3 -->
                                    <p  v-for="(item,index) in ggThree" :key="index">
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">{{item.content}}</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    
                                </td>
                                <td>
                                    <!-- 公共4 -->
                                    <p v-for="(item,index) in ggFour" :key="index">
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">{{item.content}}</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                            </tr>
                            <!-- 表格底部 -->
                            <tr class="tabFoot">
                                <td colspan="5">
                                    <span style="font-weight:bold">专栏作者: </span>
                                    <span v-for="(item,index) in zhuanlan" :key="index">
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">{{item.content}}</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 广告组件 -->
        <Bg class="bgh" srcPath="https://ad-static-xg.tagtic.cn/ad-material/images/QwsPMo81y0WFODUHlDyaaNgQi8zBFvGaEmai0uO9.jpeg"></Bg>

        <!-- 帖子列表 -->
        <div class="wx">
            <div class="newBox">
                <div class="bmBody">
                    <table>
                        <tbody>
                           <tr :class="index % 2 == 0 ? 'evenTr' : 'oddTr'" v-for="(obj,index) in articleList" :key="index">
                                <td>{{obj.replayCount}}</td>
                                <td>
                                    <a href="javascript:;" @click.stop="gotoArticle(obj.id)">{{obj.articleTitle}}</a>
                                    <span>•</span>
                                </td>
                                <td>
                                    <p class="username">{{obj.auther}}</p>
                                    <p class="time">{{obj.time  | formatDate('yyyy-MM-dd hh:mm')}}</p>
                                </td>
                                <td>
                                    <p class="replayTime">{{obj.lsatReplayTime  | formatDate('yyyy-MM-dd hh:mm')}}</p>
                                    <p class="replayName">{{obj.lastReplayUser}}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 底部栏 -->
        <div class="wx">
            <div class="footDescription">
                本版面为用户版面，由用户自行管理，论坛管理员认为讨论内容不适合的版面可能会被关闭
            </div>
        </div>

        <!-- 广告组件 -->
        <Bg class="bgh" srcPath="https://ad-static-xg.tagtic.cn/ad-material/images/QwsPMo81y0WFODUHlDyaaNgQi8zBFvGaEmai0uO9.jpeg"></Bg>

        <!-- 底部组件 -->
        <Foot></Foot>
    </div>
</template>

<script>
// 引入头部组件
import Head from '../head/Head'
// 引入分页组件
import Pagination from '../pagination/Pagination'
// 引入广告组件
import Bg from '../bg/Bg'
// 引入底部组件
import Foot from '../foot/Foot'
// 引入vuex
import { mapState } from 'vuex'

export default {
    components: {
        Head,
        Pagination,
        Bg,
        Foot
    },

    computed: {
        ...mapState(['pageY'])
    },

    data() {
        return {
            bmObj: {
                bmName: '大漩涡',
                bmAritcleList: []
            },

            pageObj: {
                currentPage: 1,
                pageNum: 37,
                totalCount: 700
                // totalCount: 230
            },

            // 帖子集合
            articleList: [],

            // 版头公共1-4
            ggOne: {},
            ggtwo: [],
            ggThree: [],
            ggFour: [],

            // 专栏作者
            zhuanlan: [],

            // 头部高度
            cPageY: 0

        }
    },

    created() {
        // 获取到跳转页面传递过来的版面path值，会根据此值查询对应的版面内容
        let path = this.$route.query.path
        // console.log(path);


        // 页面从顶部开始
        window.parent.scrollTo(0, localStorage.getItem('pageY'))

    },

    mounted() {
        // 获取帖子集合
        this.getArticleList()

        // 获取版头公共1-4
        this.getGonggao()
        // 获取专栏作者
        this.getZhuanlan()

        // 监听页面回退事件，他会触发一个函数
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', this.goBack, false);
        }

    },

    methods: {
        // 回退事件触发的函数，此函数在生命周期方法中被监听
        goBack() {
            localStorage.setItem('pageY', 0)
            this.$router.go(-1)
        },

        // 点击分页栏后获取到修改后的当前页值
        getCPage(val) {
            this.pageObj.currentPage = val
            console.log('当前页：' + this.pageObj.currentPage);
        },
        
        // 获取当前版块的帖子集合(应根据传入id查询,这里是死数据)
        getArticleList() {
            this.$axios.get('./tz/wszt.json').then(({data}) => {
                this.articleList = data
            })
        },

        // 跳转页面
        gotoArticle(id) {
            this.$router.push({
                path: '/article',
                query: {
                    id: id
                }
            })
            // 跳转帖子链接时，记录当前页面被卷去的头部距离并存储在本地中（返回上一页的时候要用到）
            localStorage.setItem('pageY', window.pageYOffset)
        },

        // 把毫秒值时间转换为指定格式时间
        getTime(time) {
            const dt = new Date(time)

            const year = dt.getFullYear()

            // 先把月份转换为字符串，然后使用padStart方法 
            // 2表示字符串要满足2个，
            // '0'表示不满足2个的前面用'0'代替
            const month = (dt.getMonth() + 1 + '').padStart(2, '0')

            const day = (dt.getDate() + '').padStart(2, '0')

            const hour = (dt.getHours() + '').padStart(2, '0')
            const minutes = (dt.getMinutes() + '').padStart(2, '0')
            const seconds = (dt.getSeconds() + '').padStart(2, '0')

            // 返回拼接的值
            // return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
            return `${month}-${day} ${hour}:${minutes}`
        },

        // 获取版头公共1-4
        getGonggao() {
            for(let i = 1; i <= 4; i++) {
                 this.$axios.get(`./bk/gonggao${i}.json`).then(({data}) => {
                    if(i == 1) {
                        this.ggOne = data
                    } else if(i == 2) {
                        this.ggtwo = data
                    } else if(i == 3) {
                        this.ggThree = data
                    } else {
                        this.ggFour = data
                    }
                })
            }
        },

        // 获取专栏作者
        getZhuanlan() {
            this.$axios.get('./bk/zhuanlan.json').then(({data}) => {
                this.zhuanlan = data
            })
        }

        //
    },

    
    destroyed(){
        // 当页面销毁的时候，销毁指定的函数
        window.removeEventListener('popstate', this.goBack, false);
    }

}
</script>

<style lang="less" scoped>

// 响应式宽度小于等于750px的样式修改
@media screen and (max-width: 750px) {
    .tool {
        display: none;
    }

    .bmHead {
        display: none;
    }

    .bgh {
        display: none;
    }

    .bmBody {
        position: relative;
        tr {
            display: block;
            position: relative;
            height: 1.041667rem!important;
            width: 100%;
            td {
                position: absolute;
                height: 0.3125rem!important;
                background-color: #ffedc3!important;
                border: 0!important;
            }
            td:first-child {
                font-size: 0.208333rem!important;
                width: 20%!important;
                text-align: left!important;
                padding-left: 8px;
            }
            td:nth-child(2) {
                position: absolute;
                box-sizing: border-box;
                width: 100%;
                height: 0.729167rem!important;
                bottom: 0;
                line-height: 0.729167rem;
                background-color: #fff0cd!important;
                font-size: 0.067708rem!important;
            }
            td:nth-child(3) {
                width: 40%!important;
                right: 40%;
                p {
                    display: inline-block;
                    padding: 2px 0.052083rem!important;
                }
            }
            td:nth-child(4) {
                width: 40%!important;
                right: 0;
                p {
                    display: inline-block;
                    padding: 2px 0.052083rem!important;
                }
            }
        }
        tr:nth-of-type(odd) {
            td {
                background-color: #fff6df!important;
            }
            td:nth-child(2) {
                background-color: #fff8e7!important;
            }
        }
    }
}

.bmTitle {
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
    .bmName {
        font-size: 16px;
        padding: 12.2px 8px;
        border: 1px solid #fffcee;
        border-radius: 3px;
        font-weight: 600;
        background-color: #fff0cd;
        box-shadow: 0 0 6px -3px #000;
    }
    a {
        color: var(--themColor);
    }

    a:hover {
        text-decoration: underline;
        color: #b87563!important;
    }
}



.pagination_tool {
    overflow: hidden;
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

.bmHead {
    padding: 7px;
    a:hover {
        text-decoration: underline;
    }
    .bmHead_title {
        margin-bottom: 10px;
        span {
            padding: 2px 12px;
            font-size: 17px;
            font-weight: bold;
            color: #fff;
            background-color: var(--themColor);
            border-radius: 5px;
            margin-right: 10px;
        }
        a {
            font-size: 16px;
            font-weight: bold;
            color: #2c5787;
        }
    }

    .bmHead_body {
        padding: 3px;
        margin-bottom: 10px;
        a {
            font-size: 15px;
            font-weight: bold;
            color: #2c5787;
        }
        .kuohao {
            padding: 2px;
            font-size: 15px;
            color: #D0D0D0;
        }
        table {
            width: 100%;
            border: 1px solid #ead5bc;
            vertical-align: middle;
            border-collapse: collapse;
            td {
                border: 1px solid #ead5bc;
            }
            .tabTitle {
                td {
                    width: 18%;
                    height: 35px;
                    text-align: center;
                    font-size: 15px;
                    font-weight: bold;
                }
                td:nth-child(3) {
                    width: 28%;
                    height: 550px;
                    font-weight: normal;
                    a {
                        color: #ee5555;
                        font-size: 20px;
                    }
                }
            }
            .tabBofy {
                td {
                    padding: 8px;
                }
                td:first-child {
                    vertical-align: top;
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 35px;
                    color: teal;
                }
                td:nth-child(2) {
                    text-align: center;
                }
            }
            .tabFoot {
                td {
                    padding: 8px;
                    font-size: 15px;
                    a {
                        color: #1a3959;
                    }
                }
            }
        }
    }
}

.bmBody {
    padding: 1px 0 0;
    background-color: #fff;
    a:hover {
        text-decoration: underline;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        tr {
            border-bottom: 0.1px solid #fff;
            td {
                height: 58px;
                border-left: 1px solid #fff;
                border-right: 1px solid #fff;
            }
            td:first-child {
                width: 5%;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                color: #9f6170;
            }
            td:nth-child(2) {
                padding-left: 5px;
                a {
                    font-size: 15px;
                    color: #1a3959;
                }
                span {
                    margin-left: 5px;
                    font-size: 18px;
                    color: #BD7E6D;
                }
            }
            td:nth-child(3),
            td:nth-child(4) {
                width: 14%;
                text-align: center;
                p {
                    margin: 0;
                    padding: 2px 0;
                    font-size: 13px;
                }
                .username,
                .replayName {
                    color: #1a3959;
                }
                .time,
                .replayTime {
                    color: #888;
                }
            }
        }
        
        .evenTr {
            td {
                background-color: #fff6df;
            }
            td:nth-child(2),
            td:nth-child(4) {
                background-color: #fff8e7;
            }
        }

        .oddTr {
            td {
                background-color: #ffedc3;
            }
            td:nth-child(2),
            td:nth-child(4) {
                background-color: #fff0cd;
            }
        }
    }
}

.footPage_footToll {
    overflow: hidden;
}

.footDescription {
    text-align: center;
    padding: 30px 0;
    font-size: 14px;
    color: #888;
}
</style>