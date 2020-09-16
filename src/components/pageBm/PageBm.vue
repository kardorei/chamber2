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
                                    <span>
                                        1. 杂谈区的管理主要依据用户的讨论态度，而非其观点，提倡讲道理，反对攻击性发言，一个用户的发言中对其他人
                                        所体现的恶意越大，就可能受到越重的处罚；
                                        <br><br>
                                        2. 版主删帖/锁帖不接受任何投诉和质询，版主认为不适合讨论(争议太大/带敏感词/太三俗/有专门讨论的版面)的话题会被删除，
                                        无需给出任何理由或解释，屡次发布版主不建议讨论的话题可能会受到处罚。不接受此项规定请不要发帖，发帖则视为认同。
                                    </span>
                                </td>
                                <td>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">最新: 贺情感专版“晴风村”开版，NGA首届三行情书原创大赛开始啦！</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">最新: 即日起网事杂谈区试运行新规则标准</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">重要：转帖需附原文链接，不得随意删改原文</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">《网络信息内容生态治理规定》</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">对于水区政治贴尺度变更的说明</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">手机客户端下载地址</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">移动客户端建议及BUG反馈帖</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">请谨慎对待论坛内的借贷关系</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[真的是钓鱼]钓鱼科普(路亚方向)</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[真的是钓鱼]钓鱼科普(台钓方向)</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[原创刑侦故事]小城小案系列第一季</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[原创刑侦故事]小城小案系列第二季</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[原创刑侦故事]小城小案系列第三季</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">“传统文化”之龙岭迷窟电视剧中的悬魂梯</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">“传统文化”之奇门遁甲到底是啥</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">“传统文化”之《龙岭迷窟》里的术数“彩蛋”</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">“传统文化”之为什么十二生肖是这十二种动物？</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">三国历史冷知识</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[劣币驱逐良币]浅聊秦汉三国货币的变迁</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">黄钟毁弃，瓦釜雷鸣 | 一曲属于姜维的悲歌</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">《聊斋志异 ·公孙九娘》背后的故事</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">我说来不及，你就不学了吗？</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[书法] 如何练字，扯扯我的一些观点。</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[书法] 分享练钢笔字一年的心得</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[一建考试] 从一建的卷子里薅最多的分！</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[公考] [申论] 来自91分大混子的真题实操</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[公考] [申论] 一篇不大靠谱的申论经验帖</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">住宅照明设计，初级，中级，教程</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">多图科普向长文：进化的奇迹——从细菌到人</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">中国文明起源的考古学科普</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">考古学证据为你还原中国古史传说时代</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">中国古典文化漫谈</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                    <p>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">[乱纷纷你方唱罢我登场] 简说五胡十六国</a>
                                        <span class="kuohao">]</span>
                                    </p>
                                </td>
                            </tr>
                            <!-- 表格底部 -->
                            <tr class="tabFoot">
                                <td colspan="5">
                                    <span style="font-weight:bold">专栏作者: </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">十二囧神</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">音乐茶话会</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">達爾文的旗幟</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">刘备字大爷</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">雷若阿</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">毒蛇KISS</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">面包店王二</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">slayershute</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">银翼的两仪之鸦</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">部落大酋长希尔瓦娜斯</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">烂耳朵拉轰</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">高科技</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">宁芙</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">申请通道</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">乌咪漫评</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">potato0124</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">银翼的两仪之鸦</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">lilac17</a>
                                        <span class="kuohao">]</span>
                                    </span>
                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">雪诺</a>
                                        <span class="kuohao">]</span>
                                    </span>

                                    <span>
                                        <span class="kuohao">[</span>
                                        <a href="javascript:;">风紧扯呼</a>
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

export default {
    components: {
        Head,
        Pagination,
        Bg,
        Foot
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
            articleList: []
        }
    },

    created() {
        // 获取到跳转页面传递过来的版面path值，会根据此值查询对应的版面内容
        let path = this.$route.query.path
        // console.log(path);
    },

    mounted() {
        this.getArticleList()
    },

    methods: {
        // 点击分页栏后获取到修改后的当前页值
        getCPage(val) {
            this.pageObj.currentPage = val
            console.log(this.pageObj.currentPage);
        },
        
        // 获取当前版块的帖子集合(应根据传入id查询,这里是死数据)
        getArticleList() {
            this.$axios.get('./tz/wszt.json').then(({data}) => {
                this.articleList = data
            })
        },

        gotoArticle(id) {
            this.$router.push({
                path: '/article',
                query: {
                    id: id
                }
            })
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

        //
    },

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