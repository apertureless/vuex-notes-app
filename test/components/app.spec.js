import Vue from 'vue'
import App from '../../components/App.vue'

describe('App.vue', () => {
	let el, vm
	beforeEach(() => {
		el = document.createElement('div')
	})

	afterEach(() => {
      vm.$destroy()
    })

	it('should render app', () => {
		vm = new Vue({
	      template: '<app></app>',
	      components: { App }
	    }).$mount(el)

		expect(vm.$children.length).to.equal(1)
	})

	it('should render 3 child components', () => {
		const vm = new Vue({
	      template: '<app></app>',
	      components: { App }
	    }).$mount(el)

		expect(vm.$children[0].$children.length).to.equal(3)
	})
})
