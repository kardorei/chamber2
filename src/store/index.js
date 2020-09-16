import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageY: 0
    },
    mutations: {
        pageYChange(state, num) {
            state.pageY = num
        }
    },
    actions: {},
    modules: {}
})