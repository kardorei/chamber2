<template>
    <div>
        <div class="fl">
            <div class="pagination">
                <div class="divItem">
                    <a href="javascript:;" @click.stop="gobackpage">后页</a>
                </div>
                <div class="divItem pages">
                </div>
                <div class="divItem">
                    <a href="javascript:;" @click.stop="showGoto">到</a>
                </div>
            </div>
        </div>
        <div class="goto">
            <div class="gotoClose">
                <span @click.stop="closeGoto">×</span>
            </div>
            <div class="doGoto">
                <span>
                    到
                    <input type="text" v-model="gotoPageNum">
                    <button @click.stop="gotoPage">页</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pageObj'],
    data() {
        return {
            totalPage: 0,
            currentPage: 0,
            gotoPageNum: 1
        }
    },
    mounted() {
        // console.log(this.pageObj);
        this.setTotalPage()
        this.setPage()
        this.setAStyle()
    },
    methods: {
        setTotalPage() {
            this.totalPage = Math.ceil(this.pageObj.totalCount / this.pageObj.pageNum)
            // console.log(this.totalPage);
        },

        // 添加分页栏
        setPage() {
            // 定义分页栏数量，如果总页数大于7则最多7个
            let pageSize = 0
            pageSize = this.totalPage >= 7 ? 7 : this.totalPage

            if(pageSize > 0) {
                // 获取父元素
                let pages = document.querySelector('.pages')
                const vueScopedStyleAttr = pages.attributes[0].name
                for(let i = 0; i < pageSize; i++) {
                    let a = document.createElement('a')
                    a.setAttribute(vueScopedStyleAttr, '')
                    a.setAttribute('index', i)
                    a.href = 'javascript:;'
                    a.textContent = i + 1
                    a.addEventListener('click', (e) => {
                        this.editPagesStyle(e)
                    })
                    if(i === 0) {
                        a.classList.add('checkedPage')
                    }
                    pages.appendChild(a)
                }
            }
        },

        // 分页栏的点击事件
        editPagesStyle(e) {
            // 这里因为给a标签添加了一个div遮挡层，所以获取的时候是获取
            // 的遮挡层的div，在用遮挡层获取父类a标签即可

            // let index = e.target.getAttribute('index')
            // let num = e.target.textContent
            
            let index = e.target.parentNode.getAttribute('index')
            let num = e.target.parentNode.textContent
            // console.log(e.target.parentNode);
            this.pagenation(num,index)
        },

        // 分页操作方法，需要传入当前页的值和所在分页栏的index值
        pagenation(currentPage, i) {
            let as = document.querySelector('.pages').querySelectorAll('a')
            // 接收传递进来的当前页值和index值
            let cn = currentPage - 0
            let cindex = i

            // console.log(cn);
            // console.log(cindex);

            // 如果分页栏的长度小于7
            if(as.length < 7) {
                as.forEach(a => {
                    a.classList.remove('checkedPage')
                })
                as[i].classList.add('checkedPage')

                cn = cn >= this.totalPage ? this.totalPage : cn
            } else {
                let index = 3

                // 分页栏最大值
                let pageMax = 0
                // 得出分页栏最大中位数的值
                let midMax = this.totalPage - 3
                // 2、先清除所有选中样式
                as.forEach(a => {
                    a.classList.remove('checkedPage')
                })
                // 3.1、把index值修改为当前值
                index = cindex
                // 3.2、为当前页所在的index添加样式
                as[index].classList.add('checkedPage')

                 // 3.3、如果点击的索引大于中位索引则为中位索引添加样式
                if (cindex >= 3) {
                    as.forEach(a => {
                        a.classList.remove('checkedPage')
                    })
                    as[3].classList.add('checkedPage')

                    // 如果当前的值大于最大中位数的值，那么当前的值可能是最后三位数其中之一，如果不大于中位数则直接加三
                    if (cn > midMax) {
                        cn == midMax + 1 ? pageMax = cn + 2 : null
                        cn == midMax + 2 ? pageMax = cn + 1 : null
                        cn == midMax + 3 ? pageMax = cn : null
                        as.forEach(a => {
                            a.classList.remove('checkedPage')
                        })
                        as[index].classList.add('checkedPage')
                    } else {
                        pageMax = cn + 3
                    }
                } else {
                    if (cn < midMax) {
                        // 最大索引值减去当前索引得到的差值加上当前页的值 = 分页栏显示的最大值
                        let a = 6 - index
                        pageMax = cn + a
                    }
                }

                // 4、重新为tds中各个a赋值(点击触发的单前值经过运算得到分页栏最大值，然后重新为分页栏赋值)
                for(let i = as.length - 1; i >= 0; i--) {
                    as[i].textContent = pageMax
                    pageMax --
                    if ((as[i].textContent - 0) == cn) {
                        as.forEach(a => {
                            a.classList.remove('checkedPage')
                        })
                        as[i].classList.add('checkedPage')
                    }
                }

                // 5、重置index和pageMax的值
                index = 3
                pageMax = 0
            }

            // 给data中的当前页赋值
            this.currentPage = cn

            // 想父组件传递当前页值
            this.$emit('getCurrentpage', this.currentPage)
        },

        // 后退一页
        gobackpage() {
            // 获取当前有被选中的样式的a标签中的内容 checkedPage
            let num = document.querySelector('.checkedPage').textContent
            let index = document.querySelector('.checkedPage').getAttribute('index')

            let as = document.querySelector('.pages').querySelectorAll('a')

            // 如果当前页不等于1才操作
            if( num != 1) {
                index -= 1
                num -= 1

                // index最小值为0
                index = index < 0 ? index = 0 : index

                // console.log(num);
                // console.log(index);

                // 修改data中当前页的值
                this.currentPage = num

                // 调用方法更改分页栏内容
                this.pagenation(num,index)
            }

            
        },

        // 显示跳转框
        showGoto(e) {
            let goto = document.querySelector('.goto')
            goto.style.display = 'block'
            goto.style.left = (e.pageX + 5) + 'px'
            goto.style.top = (e.pageY + 5) + 'px'
        },

        // 跳转指定页面
        gotoPage() {
            // pageNum为传入的跳转页面
            // cn为调用方法时候作用的参数表示为跳转的当前页面
            // index跳转页在分页栏的位置
            let pageNum = this.gotoPageNum
            let cn = 0
            let index = 0

            // 判断总页数是否小于7(分页栏最大显示7个)
            if(this.totalPage < 7) {
                pageNum >= this.totalPage ? cn = this.totalPage : cn = pageNum
                if(cn < 1) {
                    cn = 1
                }
                index = cn - 1
            } else {
                // 最大中位数
                const mn = this.totalPage - 3
                if( pageNum > 1) {
                    cn = pageNum >= this.totalPage ? this.totalPage : pageNum
                } else {
                    cn = 1
                }

                this.gotoPageNum = cn

                if(cn < mn && cn > 3) index = 3
                if(cn < 4) index = (cn - 1)
                if(cn > mn) {
                    cn == mn + 1 ? index = 3 + 1 : null
                    cn == mn + 2 ? index = 3 + 2 : null
                    cn == mn + 3 ? index = 3 + 3 : null
                }
            }

            // 修改data中当前页的值
            this.currentPage = cn - 0
            
            // console.log('cn：' + cn);
            // console.log('index：' + index);
            this.pagenation(cn, index)

            document.querySelector('.goto').style.display = 'none'
        },

        // 关闭跳转页面
        closeGoto() {
            document.querySelector('.goto').style.display = 'none'
        },

        // 给分页栏中所有的a添加样式
        setAStyle() {
            // absolute
            let as = document.querySelector('.pagination').querySelectorAll('a')
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
                    mask.style.height = ah + 'px'
                    mask.style.backgroundColor = 'rgba(255,255,255,.4)'
                    mask.style.position = 'absolute'
                    mask.style.top = 0
                    mask.style.left = 0
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

        //
    }
}
</script>

<style lang="less" scoped>
a {
    color: var(--themColor);
}

table {
    border-collapse: collapse;
}

.pagination {
    overflow: hidden;
    float: left;
    height: 45px;
    line-height: 45px;
    border: 1px solid #cacaca;
    box-shadow: 0 0 5px -3px #000;
    border-radius: 2.5px;
    padding: 1px;
    background-color: #fff0cd;
    .divItem {
        float: left;
        a {
            display: block;
            padding: 0 20px;
            float: left;
            border-right: 1px solid #ead5bc;
            font-size: 15px;
            font-weight: bold;
        }
    }
    .divItem:last-child a {
        border: none;
    }
}

.goto {
    display: none;
    position: fixed;
    width: 200px;
    height: 100px;
    background-color: #fff6df;
    border: 1px solid var(--themColor);
    box-shadow: 0 0 10px #444;

    .gotoClose {
        width: 100%;
        height: 30%;
        border-bottom: 1px solid #fff0cd;
        span {
            float: right;
            display: block;
            width: 25%;
            height: 100%;
            background-color: #fff0cd;
            text-align: center;
            font-size: 15px;
            font-weight: bold;
            line-height: 30px;
            cursor: pointer;
        }
        span:hover {
            background-color: var(--themColor);
            color: #fff;
        }
    }

    .doGoto {
        box-sizing: border-box;
        padding: 20px 0;
        padding-left: 5px;
        span {
            font-size: 15px;
            input {
                width: 65px;
                height: 25px;
                background-color: #fffcee;
                border-radius: 5px;
                border: 1px solid #e0c19e;
                box-shadow: 0 0 2px 0 #bbb inset;
            }
            button {
                width: 30px;
                height: 25px;
                margin-left: 5px;
                border: none;
                background-color: #ead5bc;
                border-radius: 5px;
            }
        }
    }
}

.checkedPage {
    background-color: #591804!important;
    color: #fff;
}
</style>