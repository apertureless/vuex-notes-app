import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
	store,
	components: { App }
}).$mount('.app')
