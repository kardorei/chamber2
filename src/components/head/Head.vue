<template>
    <div class="w bgc">
        <div class="wx">
            <div class="fl bgcL">
                <div class="logo fl">
                    <img src="../../assets/pic/logo/logo.jpg" alt="">
                </div>
                <div class="nav fl">
                    <ul>
                        <li><a href="javascript:;" class="a_mask">首页</a></li>
                        <li><a href="javascript:;" class="a_mask">论坛</a></li>
                        <li><a href="javascript:;" class="a_mask">评分</a></li>
                        <li><a href="javascript:;" class="a_mask">移动端</a></li>
                    </ul>
                </div>
            </div>

            <div class="fr bgcR">
                <div class="fl">
                    <a href="javascript:;" class="user a_mask" @click.stop="showUserBG">
                        <span>你好</span>
                        <span>切格瓦拉</span>
                    </a>
                    <div class="userBG" style="display: none;">
                        <div class="userBG_head">
                            <span @click.stop="closeUserBG">×</span>
                        </div>
                        <div class="userBG_body">
                            <div class="bodyR fr">
                               <ul>
                                   <li style="display: block;">
                                        <a href="javascript:;">论坛用户中心</a>
                                        <a href="javascript:;">账户设置</a>
                                        <a href="javascript:;">消息</a>
                                        <a href="javascript:;">精华主题</a>
                                        <a href="javascript:;">收藏的主题</a>
                                        <a href="javascript:;">我的主题</a>
                                        <a href="javascript:;">我的回复</a>
                                        <a href="javascript:;">物品/道具</a>
                                        <a href="javascript:;">设置头像</a>
                                        <a href="javascript:;">设置签名</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">设置</a>
                                        <a href="javascript:;">控制台</a>
                                        <a href="javascript:;">界面设置</a>
                                        <a href="javascript:;">设置背景</a>
                                        <a href="javascript:;">提交bug信息</a>
                                    </li>
                                    <li>搜索内容</li>
                                    <li>道具内容</li>
                               </ul>
                            </div>
                            <div class="bodyL fl">
                               <ul>
                                    <li class="aline"><a href="javascript:;">我的›</a></li>
                                    <li><a href="javascript:;">设置›</a></li>
                                    <li><a href="javascript:;">搜索›</a></li>
                                    <li><a href="javascript:;">道具›</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="userBG_foot">
                            <span class="foot_name">窃国瓦拉</span><br>
                            <span class="foot_id">4300132</span>
                        </div>
                    </div>
                </div>
                <div class="nav fl">
                    <ul>
                        <li><a href="javascript:;" class="a_mask">登出</a></li>
                        <li><a href="javascript:;" class="a_mask">消息</a></li>
                    </ul>
                </div>
                <div class="search fl">
                    <input type="search" placeholder="搜索">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.setAStyle()
        this.userBGli()
        // 点击非用户面板区域关闭用户面板
        document.addEventListener('click',e => {
            // 获取用户面板
            const srcdoc = document.querySelector('.userBG')

            // 判断当前点击的元素是否属于用户面板的，如果不属于就关闭用户面板
            if(!srcdoc.contains(e.target)) {
                srcdoc.style.display = 'none'
            }
        })
    },

    methods: {
        // 为所有的a标签添加鼠标事件
        setAStyle() {
            // 获取所有的a标签
            let as = document.querySelectorAll('.a_mask')

            as.forEach(a => {
                // 鼠标进入添加覆盖盒子div 
                a.addEventListener('mouseenter', function() {
                    // 获取当前a标签的宽高
                    const aw = a.offsetWidth
                    const ah = a.offsetHeight
                    a.style.position = 'relative'

                    // 设置覆盖a标签的盒子
                    let mask = document.createElement('div')
                    mask.style.width = aw + 'px'
                    mask.style.height = (ah - 3) + 'px'
                    mask.style.backgroundColor = 'rgba(255,255,255,.4)'
                    mask.style.position = 'absolute'
                    mask.style.top = 0
                    mask.style.left = 0
                    mask.style.borderBottom = '3px solid #591804'
                    mask.className = 'mask'

                    // 把覆盖的盒子添加进a标签中
                    a.appendChild(mask)
                })

                // 鼠标移出时，删除覆盖的盒子
                a.addEventListener('mouseleave',function() {
                    a.querySelector('.mask').remove()
                })
            })
        },

        // 为用户面板的左边li标签设置点击事件触发样式
        userBGli() {
            let lis = document.querySelector('.bodyL').querySelectorAll('li')
            lis.forEach((li, index) => {
                // 为每一个li添加index属性
                li.setAttribute('index', index)
                // 添加点击事件
                li.addEventListener('click', function() {
                    // 样式的排他操作
                    lis.forEach(li => {
                        li.classList.remove('aline')
                    })
                    li.classList.add('aline')

                    // 获取当前点击的li的index属性值
                    const index = this.getAttribute('index')

                    // 获取对应的右边内容的li
                    let rLis = document.querySelector('.bodyR').querySelectorAll('li')
                    rLis.forEach(li => {
                        li.style.display = 'none'
                    })
                    rLis[index].style.display = 'block'
                })
            })
        },

        // 点击关闭用户信息面板
        closeUserBG(e) {
            let userBG = document.querySelector('.userBG')
            userBG.style.display = 'none'
        },

        // 点击打开用户信息面板
        showUserBG() {
            let userBG = document.querySelector('.userBG')
            userBG.style.display = 'block'
        }
    }
}
</script>

<style lang="less" scoped>
.bgc {
    height: 55px;
    background-color: #fff0cd;
}

// 响应式宽度小于等于750px的样式修改
@media screen and (max-width: 750px) {
    .bgc {
        // height: 0.572917rem!important;
        height: 0.78125rem!important;
    }
    .bgcL {
        display: none;
    }
    .search {
        display: none!important;
    }
    .user {
        flex-direction: row!important;
        // height: 0.572917rem!important;
        height: 0.78125rem!important;
        padding: 0 0.260417rem!important;
        span {
            font-size:  0.260417rem!important;
            white-space: nowrap;
            margin-left: 5px;
        }
    }
    a {
        // height: 0.572917rem!important;
        height: 0.78125rem!important;
        line-height: 0.78125rem!important;
        padding: 0 0.78125rem!important;
        font-size: 0.260417rem!important;
        align-items: center!important;
    }

    .userBG {
        width: 5rem!important;
        .userBG_body {
            .bodyL {
                padding: 0.109375rem 0.078125rem 0 0.109375rem;
            }
            a {
                padding: 0.09375rem!important;
                padding-bottom: 0!important;
                font-size: 0.25rem!important;
            }
            .bodyR {
                width: 3.927083rem!important;
                padding-top: 0.114583rem!important;
            ul {
                padding-left: 0.114583rem!important;
                padding-top: 0.052083rem!important;
                margin-bottom: 0.114583rem!important;
                // min-height: 150px;
                border-left: 0.016146rem solid #ccc!important;
                    a {
                        padding-bottom: 0!important;
                    }
                }
            }
            .aline {
                border: 0!important;
            }
            
        }
        .userBG_foot {
            .foot_name {
                font-size: 0.520833rem!important;
            }
            .foot_id {
                font-size: 0.104167rem!important;
            }
        }
    }
}

.logo {
    position: relative;
    width: 0.713542rem;
    height: 55px;
    margin-right: 20px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        transform: translateY(-50%)
    }
}

.nav {
    li {
        float: left;

        a {
            display: block;
            height: 55px;
            text-align: center;
            line-height: 55px;
            padding: 0 23px;
            font-size: 15px;
            color: var(--themColor);
        }
    }
}

.user {
    height: 55px;
    display: flex;
    flex-direction: column;
    background-color: var(--themColor);
    color: #fff;
    padding: 0 25px;

    span {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 15px;
    }

    span:first-child {
        align-items: flex-end;
    }
}

.userBG {
    position: absolute;
    width: 310px;
    background-color: #fff6df;
    border: 1px solid var(--themColor);
    box-shadow: 0 0 10px #444;
    z-index: 999;
    .userBG_head {
        height: 40px;
        border-bottom: 1px solid #fff0cd;
        span {
            float: right;
            display: block;
            width: 60px;
            height: 100%;
            background-color: #fff0cd;
            text-align: center;
            line-height: 36px;
            font-size: 20px;
            cursor: pointer;
            color: var(--themColor);
            font-weight: 600;
        }

        span:hover {
            background-color: var(--themColor);
            color: #fff;
        }
    }

    .userBG_body {
        overflow: hidden;
        font-size: 15px;
        position: relative;
        .bodyL {
            position: absolute;
            padding: 7px 5px 0 17px;
            a {
                display: block;
                padding: 5px;
                color: #b3aea3;
                font-weight: 600;
            }
        }

        .bodyR {
            width: 244px;
            padding-top: 7px;
            ul {
                padding-left: 7px;
                padding-top: 3px;
                margin-bottom: 7px;
                min-height: 150px;
                border-left: 1px solid #ccc;
                li {
                    display: none;
                }
                a {
                    display: block;
                    color: rgb(128, 192, 192);
                    font-weight: 600;
                    padding-bottom: 12px;
                }
                a:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .aline {
        border: 1px solid #ccc;
        border-right: 2px solid #fff6df;
        border-radius: 5px 0 0 5px;
    }

    .userBG_foot {
        background-color: var(--themColor);
        color: #fff;
        padding-bottom: 3px;
        span {
            padding-left: 3px;
        }
        .foot_name {
            font-size: 30px;
            font-weight: 600;
        }
        .foot_id {
            font-size: 15px;
            line-height: 100%;
        }
    }
}

.search {
    display: flex;
    height: 55px;
    align-items: center;
    margin-left: 20px;

    input {
        width: 135px;
        height: 26px;
        border-radius: 5px;
        border: 1px solid #e0c19e;
        color: #10273f;
        box-shadow: 0 0 2px 0 #bbb inset;
        background-color: #fffcee;
        padding-left: 5px;
        font-size: 15px;
    }
}

input::-ms-input-placeholder{text-align: right;}
input::-webkit-input-placeholder{text-align: right;}


</style>