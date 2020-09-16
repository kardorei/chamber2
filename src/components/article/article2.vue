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
                        <a href="javascript:;">{{articleTitle}}</a>
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
            }
        }
    },
    created() {
        let id = this.$route.query.id
        this.articleId = id
        console.log(this.articleId);
    },
    mounted() {
        this.getMainFloor()
        this.getArticleReplayList()
    },
    methods: {
        // 点击分页栏后获取到修改后的当前页值
        getCPage(val) {
            this.pageObj.currentPage = val
            console.log(this.pageObj.currentPage);
        },

        // 获取主楼内容并渲染
        getMainFloor() {
            let tr = document.querySelector('.mainFloor').querySelector('tr')
            const vueScopedStyleAttr = tr.attributes[0].name

            let path = ''
            if(this.articleId == 1) {
                path = './article/main.json'
            } else {
                path = './article/main2.json'
            }

            this.$axios.get(path).then(({data}) => {
                // 先给标题赋值
                this.articleTitle = data.title
                tr.appendChild(this.setMainFloorL(data,vueScopedStyleAttr))
                tr.appendChild(this.setMainFloorM(data,vueScopedStyleAttr))
                tr.appendChild(this.setMainFloorR(data,vueScopedStyleAttr))
            })
        },

        // 获取回复内容并渲染
        getArticleReplayList() {
            let tbody = document.querySelector('.replay').querySelector('tbody')
            const vueScopedStyleAttr = tbody.attributes[0].name

            let path = ''
            if(this.articleId == 1) {
                path = './article/replay.json'
            } else {
                path = './article/replay2.json'
            }

            this.$axios.get(path).then(({data}) => {
                data.forEach((obj, index) => {
                    let tr = document.createElement('tr')
                    tr.setAttribute(vueScopedStyleAttr, '')
                    if(index % 2 == 0) {
                        tr.classList.add('oddTr')
                    }

                    tr.appendChild(this.setReplayFloorL(obj,vueScopedStyleAttr,index))
                    tr.appendChild(this.setReplayFloorR(obj,vueScopedStyleAttr))
                    tbody.appendChild(tr)
                })
            })
        },

        // 设置回复楼层的左侧样式
        setReplayFloorL(data, vueScopedStyleAttr, index) {
            let td = document.createElement('td')
            td.setAttribute(vueScopedStyleAttr,'')

            // 1、外层span
            let span = document.createElement('span')
            span.setAttribute(vueScopedStyleAttr,'')

            // 2、第一个div
            let div1 = document.createElement('div')
            div1.setAttribute(vueScopedStyleAttr,'')
            div1.classList.add('userInfo')

            let a = document.createElement('a')
            a.setAttribute(vueScopedStyleAttr,'')
            a.href = 'javascript:;'
            a.textContent = data.userInfo.name

            let span2 = document.createElement('span')
            span2.setAttribute(vueScopedStyleAttr,'')
            span2.textContent = data.userInfo.id

            let p = document.createElement('p')
            p.setAttribute(vueScopedStyleAttr,'')
            // 当前回复的楼层 = (当前页 - 1)*20 + 遍历的index值 + 1。20为每页显示数,index是从0开始所以加1
            let floor = (this.pageObj.currentPage - 1) * this.pageObj.pageNum + (index + 1)
            p.textContent = '#' + floor

            div1.appendChild(a)
            div1.appendChild(span2)
            div1.appendChild(p)

            // 3、第二个div
            let div2 = document.createElement('div')
            div2.setAttribute(vueScopedStyleAttr,'')
            div2.classList.add('userLv')
            for(let i = 1; i <= 4; i++) {
                let div = document.createElement('div')
                div.setAttribute(vueScopedStyleAttr,'')
                let p = document.createElement('p')
                p.setAttribute(vueScopedStyleAttr,'')
                if(i == 1) {
                    div.textContent = '级别：'
                    p.textContent = data.userInfo.level
                } else if(i == 2) {
                    div.textContent = '声望：'
                    p.textContent = data.userInfo.shengwang
                } else if(i == 3) {
                    div.textContent = '注册：'
                    p.textContent = this.getTime2(data.userInfo.registerTime - 0) 
                } else {
                    div.textContent = '威望：'
                    p.textContent = data.userInfo.weiwang
                }
                div.appendChild(p)
                div2.appendChild(div)
            }

            span.appendChild(div1)
            // 4、img标签，先判断用户是否上传了图像
            if(data.userInfo.headPhoto.trim() != '') {
                let img = document.createElement('img')
                img.setAttribute(vueScopedStyleAttr,'')
                img.src = data.userInfo.headPhoto
                img.classList.add('hp')
                span.appendChild(img)
            }
            span.appendChild(div2)

            // 5、最后把td返回
            td.appendChild(span)
            return td
        },

        // 
        setReplayFloorR(data, vueScopedStyleAttr) {
            // 1、创建最外层的td
            let td = document.createElement('td')
            td.setAttribute(vueScopedStyleAttr,'')

            // 2、td中有三个大div
            // 帖子如果有改动是三个div，否则是两个
            let lenght = 2
            if(data.editTime.trim() != '') {
                lenght = 3
            }

            for(let i = 1; i <= lenght; i++) {
                let div = document.createElement('div')
                div.setAttribute(vueScopedStyleAttr,'')

                if(i == 1) {
                    // 3、div1
                    div.classList.add('contetntZan')

                    // 3.1、div1中包含二个span
                    for(let i = 1; i <= 2; i++) {
                        let span = document.createElement('span')
                        span.setAttribute(vueScopedStyleAttr,'')
                        if(i == 1) {
                            span.classList.add('zan')

                            let a1 = document.createElement('a')
                            a1.setAttribute(vueScopedStyleAttr,'')
                            a1.href = 'javascript:;'
                            a1.classList.add('iconfont')
                            a1.classList.add('icon-zan')
                            let a2 = document.createElement('a')
                            a2.setAttribute(vueScopedStyleAttr,'')
                            a2.href = 'javascript:;'
                            a2.classList.add('iconfont')
                            a2.classList.add('icon-cai')
                            let span2 = document.createElement('span')
                            span2.setAttribute(vueScopedStyleAttr,'')
                            span2.textContent = data.zan

                            span.appendChild(a1)
                            span.appendChild(span2)
                            span.appendChild(a2)
                        } else {
                            span.classList.add('fr')
                            span.classList.add('time_tool')

                            let a1 = document.createElement('a')
                            a1.setAttribute(vueScopedStyleAttr,'')
                            a1.href = 'javascript:;'
                            a1.classList.add('iconfont')
                            a1.classList.add('icon-star_full')
                            let a2 = document.createElement('a')
                            a2.setAttribute(vueScopedStyleAttr,'')
                            a2.href = 'javascript:;'
                            a2.classList.add('iconfont')
                            a2.classList.add('icon-chilun')
                            let innerspan = document.createElement('span')
                            innerspan.setAttribute(vueScopedStyleAttr,'')
                            innerspan.textContent = this.getTime(data.time - 0)

                            span.appendChild(innerspan)
                            span.appendChild(a1)
                            span.appendChild(a2)
                        }
                        div.appendChild(span)
                    }
                } else if(i == 2) {
                    // 4、div2
                    div.classList.add('articleContent')
                    div.innerHTML = data.content
                } else {
                    // 如果帖子被修改过才会有此元素
                    if(data.editTime.trim() != '') {
                        // 5、div3
                        div.classList.add('editTime')

                        let h4 = document.createElement('h4')
                        h4.setAttribute(vueScopedStyleAttr,'')
                        h4.textContent = '改动'

                        let span = document.createElement('span')
                        span.setAttribute(vueScopedStyleAttr,'')
                        span.textContent = this.getTime(data.editTime - 0)

                        div.appendChild(h4)
                        div.appendChild(span)
                    }
                    
                }
                // 6、把每个div放入td中
                td.appendChild(div)
            }

            return td
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
            return `${year}-${month}-${day} ${hour}:${minutes}`
        },

        // 把毫秒值时间转换为指定格式时间(年月日)
        getTime2(time) {
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
            return `${year}-${month}-${day}`
        },

        // 主楼的左侧样式
        setMainFloorL(data,vueScopedStyleAttr) {
            let td = document.createElement('td')
            td.setAttribute(vueScopedStyleAttr,'')

            // 1、外层span
            let span = document.createElement('span')
            span.setAttribute(vueScopedStyleAttr,'')

            // 2、第一个div
            let div1 = document.createElement('div')
            div1.setAttribute(vueScopedStyleAttr,'')
            div1.classList.add('userInfo')

            let a = document.createElement('a')
            a.setAttribute(vueScopedStyleAttr,'')
            a.href = 'javascript:;'
            a.textContent = data.userInfo.name

            let span2 = document.createElement('span')
            span2.setAttribute(vueScopedStyleAttr,'')
            span2.textContent = data.userInfo.id

            div1.appendChild(a)
            div1.appendChild(span2)

            // 3、第二个div
            let div2 = document.createElement('div')
            div2.setAttribute(vueScopedStyleAttr,'')
            div2.classList.add('userLv')
            for(let i = 1; i <= 4; i++) {
                let div = document.createElement('div')
                div.setAttribute(vueScopedStyleAttr,'')
                let p = document.createElement('p')
                p.setAttribute(vueScopedStyleAttr,'')
                if(i == 1) {
                    div.textContent = '级别：'
                    p.textContent = data.userInfo.level
                } else if(i == 2) {
                    div.textContent = '声望：'
                    p.textContent = data.userInfo.shengwang
                } else if(i == 3) {
                    div.textContent = '注册：'
                    p.textContent = this.getTime2(data.userInfo.registerTime - 0) 
                } else {
                    div.textContent = '威望：'
                    p.textContent = data.userInfo.weiwang
                }
                div.appendChild(p)
                div2.appendChild(div)
            }

            span.appendChild(div1)
            // 4、img标签，先判断用户是否上传了图像
            if(data.userInfo.headPhoto.trim() != '') {
                let img = document.createElement('img')
                img.setAttribute(vueScopedStyleAttr,'')
                img.src = data.userInfo.headPhoto
                img.classList.add('hp')
                span.appendChild(img)
            }
            span.appendChild(div2)

            // 5、最后把td返回
            td.appendChild(span)
            return td
        },

        // 主楼的中间样式
        setMainFloorM(data,vueScopedStyleAttr) {
            // 1、创建最外层的td
            let td = document.createElement('td')
            td.setAttribute(vueScopedStyleAttr,'')

            // 2、td中有三个大div
            // 帖子如果有改动是三个div，否则是两个
            let lenght = 2
            if(data.editTime.trim() != '') {
                lenght = 3
            }

            for(let i = 1; i <= lenght; i++) {
                let div = document.createElement('div')
                div.setAttribute(vueScopedStyleAttr,'')

                if(i == 1) {
                    // 3、div1
                    div.classList.add('contetntZan')

                    // 3.1、div1中包含三个span
                    for(let i = 1; i <= 3; i++) {
                        let span = document.createElement('span')
                        span.setAttribute(vueScopedStyleAttr,'')
                        if(i == 1) {
                            span.classList.add('zan')

                            let a1 = document.createElement('a')
                            a1.setAttribute(vueScopedStyleAttr,'')
                            a1.href = 'javascript:;'
                            a1.classList.add('iconfont')
                            a1.classList.add('icon-zan')
                            let a2 = document.createElement('a')
                            a2.setAttribute(vueScopedStyleAttr,'')
                            a2.href = 'javascript:;'
                            a2.classList.add('iconfont')
                            a2.classList.add('icon-cai')
                            let span2 = document.createElement('span')
                            span2.setAttribute(vueScopedStyleAttr,'')
                            span2.textContent = data.zan

                            span.appendChild(a1)
                            span.appendChild(span2)
                            span.appendChild(a2)
                        } else if(i == 2) {
                            span.classList.add('contentTitle')

                            let h3 = document.createElement('h3')
                            h3.setAttribute(vueScopedStyleAttr,'')
                            h3.textContent = data.title
                            span.appendChild(h3)
                        } else {
                            span.classList.add('fr')
                            span.classList.add('time_tool')

                            let a1 = document.createElement('a')
                            a1.setAttribute(vueScopedStyleAttr,'')
                            a1.href = 'javascript:;'
                            a1.classList.add('iconfont')
                            a1.classList.add('icon-star_full')
                            let a2 = document.createElement('a')
                            a2.setAttribute(vueScopedStyleAttr,'')
                            a2.href = 'javascript:;'
                            a2.classList.add('iconfont')
                            a2.classList.add('icon-chilun')
                            let innerspan = document.createElement('span')
                            innerspan.setAttribute(vueScopedStyleAttr,'')
                            innerspan.textContent = this.getTime(data.time - 0)

                            span.appendChild(innerspan)
                            span.appendChild(a1)
                            span.appendChild(a2)
                        }
                        div.appendChild(span)
                    }
                } else if(i == 2) {
                    // 4、div2
                    div.classList.add('articleContent')
                    div.innerHTML = data.content
                } else {
                    // 如果帖子被修改过才会有此元素
                    if(data.editTime.trim() != '') {
                        // 5、div3
                        div.classList.add('editTime')

                        let h4 = document.createElement('h4')
                        h4.setAttribute(vueScopedStyleAttr,'')
                        h4.textContent = '改动'

                        let span = document.createElement('span')
                        span.setAttribute(vueScopedStyleAttr,'')
                        span.textContent = this.getTime(data.editTime - 0)

                        div.appendChild(h4)
                        div.appendChild(span)
                    }
                    
                }
                // 6、把每个div放入td中
                td.appendChild(div)
            }

            return td
        },

        // 主楼的右侧样式，功能为渲染主楼右侧的广告
        setMainFloorR(data,vueScopedStyleAttr) {
            // 1、创建最外层的td
            let td = document.createElement('td')
            td.setAttribute(vueScopedStyleAttr,'')

            let a = document.createElement('a')
            a.setAttribute(vueScopedStyleAttr,'')
            a.href = 'javascript:;'

            let img = document.createElement('img')
            img.setAttribute(vueScopedStyleAttr,'')
            img.src = 'https://ad-static-xg.tagtic.cn/ad-material/images/dzfOdJlchfsJqTsXLF5vgVC07JiAW1HHRXfd3mHk.png'

            a.appendChild(img)
            td.appendChild(a)

            return td
        },

        //
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