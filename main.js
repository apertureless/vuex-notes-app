import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

Vue.config.silent = true

new Vue({
	store,
	components: { App }
}).$mount('.app')
