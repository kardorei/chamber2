import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/Index.vue'
import PageBm from '../components/pageBm/PageBm.vue'
import Article from '../components/article/Article.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/pageBm', component: PageBm },
    { path: '/article', component: Article }
]

const router = new VueRouter({
    routes
})

export default router