<template>
    <div class="w">
        <!-- 头部组件 -->
        <Head></Head>

        <!-- 首页title -->
        <div class="index_title">
            <div class="wx">
                <div class="fl">
                    <div class="BN fl">
                        N G A
                    </div>
                    <div class="gongGao fl">
                        <a href="javascript:;">论坛将于8月15日凌晨4时暂停服务实施设备升级 预计持续一小时</a>
                    </div>
                </div>
                <div class="fr tongji">
                    102937在线, 96172(4483)位会员, 6765位访客, 最多102884. 共22597085篇主题, 476987407篇回复.
                </div>
            </div>
        </div>

        <!-- 广告组件 -->
        <Bg srcPath="https://pic.downk.cc/item/5f56fea1160a154a678d79e1.gif" class="bgh"></Bg>
        
        <!-- 版面内容 -->
        <div class="wx main">
            <!-- 版面左侧 -->
            <div class="fl mianBox">
                <!-- 收藏区域 -->
                <div class="collect newBox">
                    <h2>:: 收藏版面 ::</h2>
                    <div class="contentBox3 collectBM">
                        <!-- <div class="outDiv">
                            <p></p>
                            <div class="bmIMG">
                                <img src="../../assets/pic/icon/-7u.png" alt="">
                            </div>
                            <div class="bgName_description">
                                <a href="javascript:;">大漩涡</a>
                                <span>往事杂谈</span>
                            </div>
                            <div class="checkCollect">
                                <input type="checkbox" checked="checked">
                            </div>
                        </div> -->
                    </div>
                </div>

                <!-- 往事杂谈 -->
                <div class="newBox">
                    <h2>:: 往事杂谈 ::</h2>
                </div>

                <!-- 往事杂谈图片链接组件 -->
                <PicTable :picArr="picArr"></PicTable>

                <!-- 往事杂谈版面内容 -->
                <div class="newBox">
                    <div>
                        <div class="contentBox4 wszt">
                            <!-- <div class="outDiv4">
                                <p></p>
                                <div class="bmIMG">
                                    <img src="../../assets/pic/icon/-7u.png" alt="">
                                </div>
                                <div class="bgName_description">
                                    <a href="javascript:;">大漩涡</a>
                                    <span>往事杂谈</span>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div>
                        <h2>:: IT软硬件 ::</h2>
                        <div class="contentBox4 ityj">
                        </div>
                    </div>
                </div>

                <!-- 暴雪游戏 -->
                <div class="newBox">
                    <h2>:: 暴雪游戏 ::</h2>
                </div>

                <!-- 暴雪游戏图片链接组件 -->
                <PicTable :picArr="BZGamePicArr"></PicTable>

                <!-- 暴雪游戏版块 -->
                <div class="newBox">
                    <div class="contentBox3 bzgame">
                    </div>
                </div>
            </div>

            <!-- 版面右侧 -->
            <div class="fr mianBox">
                <!-- 顶部图片展 -->
                <PicTable :picArr="rTopPicArr"></PicTable>

                <!-- 拳头游戏 -->
                <div class="newBox">
                    <h2>:: 拳头游戏 ::</h2>
                    <div class="contentBox4 riot">
                    </div>
                </div>

                <!-- Valve Games -->
                <div class="newBox">
                    <h2>:: Valve Games ::</h2>
                    <div class="contentBox4 valueGame">
                    </div>
                </div>

                <!-- 游戏专版 -->
                <div class="newBox">
                    <h2>:: 游戏专版 ::</h2>
                </div>

                <!-- 游戏专版图片展 -->
                <PicTable :picArr="gamePicArr"></PicTable>

                <!-- 大堆版块 -->
                <div class="newBox">
                    <div class="contentBox4 bigBm">
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部广告组件 -->
        <Bg class="bgh" srcPath="https://ad-static-xg.tagtic.cn/ad-material/images/QwsPMo81y0WFODUHlDyaaNgQi8zBFvGaEmai0uO9.jpeg"></Bg>

        <!-- 底部组件 -->
        <Foot></Foot>
    </div>
</template>

<script>
// 引入头部组件
import Head from '../head/Head'
// 引入广告组件
import Bg from '../bg/Bg'
// 引入图片组件
import PicTable from '../picTable/PicTable'
// 引入底部组件
import Foot from '../foot/Foot'

export default {
    components: {
        Head,
        Bg,
        PicTable,
        Foot
    },
    data() {
        return {
            picArr: [
                { path: '', title: 'QSV元祖高达RX-78评测', imgPath: 'https://pic.downk.cc/item/5f5714ca160a154a67921dce.jpg' },
                { path: '', title: '《外设情报官》第五期', imgPath: 'https://pic.downk.cc/item/5f5714ca160a154a67921dd0.jpg' },
                { path: '', title: '《声临时空枢纽》获奖作品', imgPath: 'https://pic.downk.cc/item/5f5714ca160a154a67921dd5.jpg' },
                { path: '', title: '哔哩哔哩英雄联盟挑战赛', imgPath: 'https://pic.downk.cc/item/5f5714ca160a154a67921dda.jpg' }
            ],
            BZGamePicArr: [
                { path: '', title: '《对敌人的渗透》', imgPath: 'https://img.nga.178.com/attachments/mon_202009/06/c8Q5-3j7fKeToS7i-3m.jpg' },
                { path: '', title: '官网投票选坐骑', imgPath: 'https://img.nga.178.com/attachments/mon_202009/08/-ofl4xQ5-3ih3K1kToS7i-3m.jpg' },
                { path: '', title: '《部落的崛起》章节节选', imgPath: 'https://img.nga.178.com/attachments/mon_202009/07/c8Q5-e7bnK1cToS7i-3m.jpg' },
                { path: '', title: '浩劫DH的展望', imgPath: 'https://img.nga.178.com/attachments/mon_202009/06/c8Q5-cn9jKhToS7i-3m.jpg' }
            ],
            rTopPicArr: [
                { path: '', title: 'DOTA2风行至宝已经更新', imgPath: 'https://img.nga.178.com/attachments/mon_202009/05/c8Q5-iid7KdToS7i-3m.jpg' },
                { path: '', title: '云顶之弈9.5日PBE更新', imgPath: 'https://img.nga.178.com/attachments/mon_202009/01/c8Q5-htscKyToS7i-3m.jpg' },
                { path: '', title: '英雄联盟玛尔扎哈攻略', imgPath: 'https://img.nga.178.com/attachments/mon_202009/07/c8Q5-asy2K19ToS7i-3m.jpg' },
                { path: '', title: '比赛进展', imgPath: 'https://img.nga.178.com/attachments/mon_202009/07/c8Q5-579yK1aToS7i-3m.jpg' }
            ],
            gamePicArr: [
                { path: '', title: 'Xbox Series S公布', imgPath: 'https://img.nga.178.com/attachments/mon_202009/08/c8Q5-azwdKhToS7i-3m.jpg' },
                { path: '', title: '万智牌竞技场联赛', imgPath: 'https://img.nga.178.com/attachments/mon_202009/08/-ofl4xQ5-fqtiK23T1kS7i-3m.jpg' },
                { path: '', title: '张嘴吃药 本地化优秀的游戏', imgPath: 'https://img.nga.178.com/attachments/mon_202009/08/c8Q5-4s7dK1zT1kS7i-3m.jpg' },
                { path: '', title: '超级马力欧兄弟直面会汇总', imgPath: 'https://img.nga.178.com/attachments/mon_202009/03/c8Q5-42naK1yT1kS7i-3m.jpg' }
            ]
        }
    },
    created() {
    },
    mounted() {
        this.getWsztContent()
        this.getITyjContent()
        this.getBzGameContent()
        this.getCollectContent()
        this.getRiotContent()
        this.getValueGameContent()
        this.getBigBmContent()
    },
    methods: {
        setContentBox3Style(container) {
            let divs = container.querySelectorAll('.outDiv')
            divs.forEach((k, i) => {
                if(i % 2 !== 0) {
                    k.style.backgroundColor = '#fff0cd'
                }
            })
        },

        // 传入一个元素容器，此容器必须有ContentBox4的类名，此方法会对容器中的每个元素做颜色处理
        setContentBox4Style(container, flag) {
            const divs = container.querySelectorAll('.outDiv4')
            if(!flag) {
                divs[0].style.backgroundColor = '#fff0cd'
            }
            
            for(let i = 2; i <= divs.length - 1; i+=8) {
                divs[i].style.backgroundColor = '#fff0cd'
                i + 3 > divs.length - 1 ? null : divs[i + 3].style.backgroundColor = '#fff0cd'
                i + 5 > divs.length - 1 ? null : divs[i + 5].style.backgroundColor = '#fff0cd'
                i + 6 > divs.length - 1 ? null : divs[i + 6].style.backgroundColor = '#fff0cd'
            }
        },

        // 获取往事杂谈大板块的所有小版块
        getWsztContent() {
            let wszt = document.querySelector('.wszt')
            const vueScopedStyleAttr = wszt.attributes[0].name
            this.$axios.get('./bk/wszt.json').then(({data}) => {
                this.setContentBox4(wszt,data,vueScopedStyleAttr,true)
            })
        },

        // IT硬件版块的所有小版块
        getITyjContent() {
            let ityj = document.querySelector('.ityj')
            const vueScopedStyleAttr = ityj.attributes[0].name
            this.$axios.get('./bk/ityj.json').then(({data}) => {
                this.setContentBox4(ityj,data,vueScopedStyleAttr)
            })
        },

        // 获取暴雪游戏版块所有小版块
        getBzGameContent() {
            let bzgame = document.querySelector('.bzgame')
            const vueScopedStyleAttr = bzgame.attributes[0].name
            this.$axios.get('./bk/bzgame.json').then(({data}) => {
                this.setContentBox3(bzgame,data,vueScopedStyleAttr)
            })
        },

        // 设置contentBox4的内容方法抽取，container为ContentBox4容器
        // data为数据， vueScopedStyleAttr为当前元素vue添加的属性名称
        // flag为true表示第一个元素背景色特殊设置
        setContentBox4(container,data,vueScopedStyleAttr,flag) {
            data.forEach((k, i) => {
                // 最外层div
                let outDiv4 = document.createElement('div')
                outDiv4.setAttribute(vueScopedStyleAttr,'')
                outDiv4.classList.add('outDiv4')

                // 存放路径的p标签
                let p = document.createElement('p')
                p.setAttribute(vueScopedStyleAttr,'')
                p.innerHTML = k.path

                // 图片
                let bmIMG = document.createElement('div')
                bmIMG.setAttribute(vueScopedStyleAttr,'')
                bmIMG.classList.add('bmIMG')
                let img = document.createElement('img')
                img.setAttribute(vueScopedStyleAttr,'')
                img.src = k.bkIcon
                bmIMG.appendChild(img)

                // 版块名称和描述
                let bgName_description = document.createElement('div')
                bgName_description.setAttribute(vueScopedStyleAttr,'')
                bgName_description.classList.add('bgName_description')
                let a = document.createElement('a')
                a.setAttribute(vueScopedStyleAttr,'')
                a.classList.add('gotoPage')
                a.href = 'javascript:;'
                a.textContent = k.bkName
                // 为链接添加跳转事件，把当前版面的路径名称传递过去
                a.addEventListener('click', (e) => {
                    e.stopPropagation()
                    this.gotoPage(k.path)
                })
                let span = document.createElement('span')
                span.setAttribute(vueScopedStyleAttr,'')
                span.textContent = k.bkDescription
                bgName_description.appendChild(a)
                bgName_description.appendChild(span)

                if(flag && i == 0) {
                    outDiv4.style.backgroundColor = '#591804'
                    a.style.color = '#fff'
                    span.style.color = '#fff'
                }

                // 放入外容器
                outDiv4.appendChild(p)
                outDiv4.appendChild(bmIMG)
                outDiv4.appendChild(bgName_description)

                // 最后放入版块区域
                container.appendChild(outDiv4)
            })
            this.setContentBox4Style(container,flag)
        },

        // 设置contentBox3的内容方法抽取
        setContentBox3(container,data,vueScopedStyleAttr) {
            data.forEach(k => {
                // 最外层div
                let outDiv = document.createElement('div')
                outDiv.setAttribute(vueScopedStyleAttr,'')
                outDiv.classList.add('outDiv')

                // 存放路径的p标签
                let p = document.createElement('p')
                p.setAttribute(vueScopedStyleAttr,'')
                p.innerHTML = k.path

                // 图片
                let bmIMG = document.createElement('div')
                bmIMG.setAttribute(vueScopedStyleAttr,'')
                bmIMG.classList.add('bmIMG')
                let img = document.createElement('img')
                img.setAttribute(vueScopedStyleAttr,'')
                img.src = k.bkIcon
                bmIMG.appendChild(img)

                // 版块名称和描述
                let bgName_description = document.createElement('div')
                bgName_description.setAttribute(vueScopedStyleAttr,'')
                bgName_description.classList.add('bgName_description')
                let a = document.createElement('a')
                a.setAttribute(vueScopedStyleAttr,'')
                a.classList.add('gotoPage')
                a.href = 'javascript:;'
                a.textContent = k.bkName
                // 为链接添加跳转事件，把当前版面的路径名称传递过去
                a.addEventListener('click', (e) => {
                    e.stopPropagation()
                    this.gotoPage(k.path)
                })
                let span = document.createElement('span')
                span.setAttribute(vueScopedStyleAttr,'')
                span.textContent = k.bkDescription
                bgName_description.appendChild(a)
                bgName_description.appendChild(span)

                // 放入外容器
                outDiv.appendChild(p)
                outDiv.appendChild(bmIMG)
                outDiv.appendChild(bgName_description)

                // 此容器是否是收藏版块,如果是就添加复选框样式
                if(container.classList.contains('collectBM')) {
                    let checkCollect = document.createElement('div')
                    checkCollect.setAttribute(vueScopedStyleAttr,'')
                    checkCollect.classList.add('checkCollect')
                    let input = document.createElement('input')
                    input.setAttribute(vueScopedStyleAttr,'')
                    input.type = 'checkbox'
                    input.checked = 'checked'

                    checkCollect.appendChild(input)
                    outDiv.appendChild(checkCollect)
                }

                // 最后放入版块区域
                container.appendChild(outDiv)
            })
            this.setContentBox3Style(container)
        },

        // 获取收藏版面的内容
        getCollectContent() {
            let collectBM = document.querySelector('.collectBM')
            const vueScopedStyleAttr = collectBM.attributes[0].name
            this.$axios.get('./bk/collect.json').then(({data}) => {
                this.setContentBox3(collectBM,data,vueScopedStyleAttr)
            })
        },

        // 获取拳头游戏版面的内容
        getRiotContent() {
            let riot = document.querySelector('.riot')
            const vueScopedStyleAttr = riot.attributes[0].name
            this.$axios.get('./bk/riot.json').then(({data}) => {
                this.setContentBox4(riot,data,vueScopedStyleAttr)
            })
        },

        // 获取valueGame版面的内容
        getValueGameContent() {
            let valueGame = document.querySelector('.valueGame')
            const vueScopedStyleAttr = valueGame.attributes[0].name
            this.$axios.get('./bk/valveGames.json').then(({data}) => {
                this.setContentBox4(valueGame,data,vueScopedStyleAttr)
            })
        },

        // 获取bigBm版面的内容
        getBigBmContent() {
            let bigBm = document.querySelector('.bigBm')
            const vueScopedStyleAttr = bigBm.attributes[0].name
            this.$axios.get('./bk/bigBm.json').then(({data}) => {
                this.setContentBox4(bigBm,data,vueScopedStyleAttr,true)
            })
        },

        // 跳转页面的方法，在ContentBox4和3中为a标签绑定了跳转事件，并把跳转页面的路径传递过来
        // 但是跳转路径仅仅作为参数传递，并不是真的跳转路径
        // 所有的链接都将跳转到pageBm页面
        gotoPage(path) {
            this.$router.push({
                path: '/pageBm',
                query: {
                    path: path
                }
            })
        },
       
    }
}
</script>

<style lang="less" scoped>
a {
    color: var(--themColor);
}

a:hover {
    text-decoration: underline;
    color: #b87563!important;
}

// 响应式宽度小于等于750px的样式修改
@media screen and (max-width: 750px) {
    .wx {
        width: 9.807292rem!important;
    }
    .index_title {
        .BN {
            width: 0.833333rem!important;
            text-align: center;
            float: none;
            font-size: 0.234375rem!important;
            padding: 13px 0.052083rem!important;
            margin-bottom: 0.078125rem;
        }
        .gongGao {
            float: none;
            font-size: 0.234375rem!important;
            padding: 13px 8px;
            border: 1px solid #fffcee;
        }
        .tongji {
            display: none;
        }
    }

    .bgh {
        display: none;
    }

    .mianBox {
        width: 100%!important;
        float: none;
    }

    h2 {
        font-size: 0.260417rem!important;
    }

    .contentBox3 {
        .outDiv {
            height: 0.677083rem!important;
            a {
                font-size: 0.15625rem!important;
            }
            span {
                font-size: 0.078125rem!important;
            }
            .bmIMG {
                width: 20%;
            }
        }
    }
    .contentBox4 {
        .outDiv4 {
            height: 0.677083rem!important;
            a {
                font-size: 0.15625rem!important;
            }
            span {
                font-size: 0.078125rem!important;
            }
            .bmIMG {
                width: 20%;
            }
        }
    }
}

.index_title {
    width: 100%;
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
    .gongGao {
        font-size: 16px;
        padding: 13px 8px;
        border: 1px solid #fffcee;
        border-radius: 3px;
        font-weight: 600;
        background-color: #fff0cd;
        box-shadow: 0 0 6px -3px #000;
    }
    .tongji {
        margin-top: 30px;
        color: #555;
    }
}


h2 {
    margin: 3px 0;
    font-size: 23px;
    padding-left: 10px;
    color: var(--themColor);
}

.contentBox3 {
    overflow: hidden;
    .outDiv {
        position: relative;
        float: left;
        width: 33.33%;
        height: 48px;
        overflow: hidden;
        p {
            display: none;
        }
        .bmIMG {
            height: 100%;
            float: left;
            display: flex;
            align-items: center;
            img {
                // display: none;
                width: 100%;
            }
        }
        .bgName_description {
            float: left;
            height: 100%;
            position: relative;
            a {
                position: absolute;
                top: 9%;
                white-space:nowrap;
                font-size: 16px;
                font-weight: bold;
            }
            span {
                position: absolute;
                top: 52%;
                white-space:nowrap;
                font-size: 13px;
                color: #555;
                padding-left: 5px;
            }
        }
        .checkCollect {
            display: none;
            position: absolute;
            right: 3%;
            bottom: 5%;
        }
    }

    .outDiv:hover .checkCollect {
        display: block;
    }
}

.contentBox4 {
    overflow: hidden;
    .outDiv4 {
        float: left;
        width: 25%;
        height: 48px;
        overflow: hidden;
        p {
            display: none;
        }
        .bmIMG {
            height: 100%;
            float: left;
            display: flex;
            align-items: center;
            img {
                width: 100%;
            }
        }
        .bgName_description {
            float: left;
            height: 100%;
            position: relative;
            a {
                position: absolute;
                top: 9%;
                white-space:nowrap;
                font-size: 16px;
                font-weight: bold;
            }
            span {
                position: absolute;
                top: 52%;
                white-space:nowrap;
                font-size: 13px;
                color: #888;
                padding-left: 5px;
            }
        }
    }
}

.main {
    overflow: hidden;
    .mianBox {
        width: 49.7%;
    }
}
</style>