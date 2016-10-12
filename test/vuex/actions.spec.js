import * as actions from '../../vuex/actions'
import store from '../../vuex/store'

/**
 * Helper for testing Actions
 * @param  {[type]}   action            [description]
 * @param  {[type]}   arg               [description]
 * @param  {[type]}   state             [description]
 * @param  {[type]}   expectedMutations [description]
 * @param  {Function} done              [description]
 * @return {[type]}                     [description]
 */
const testAction = (action, args, state, expectedMutations, done ) => {
	let count = 0

	// Mock Commit
	const commit = (type, payload) => {
		const mutation = expectedMutations[0]
		expect(mutation.type).to.equal(type)
		if (payload) {
			expect(mutation.payload).to.deep.equal(payload)
		}
		count ++

		if (count >= expectedMutations.length) {
			done()
		}
	}

	// call the action with mocked store and arguments
	action({ commit, state }, ...args)

	// check if no mutations should have been dispatched
	if (expectedMutations.length === 0) {
		expect(count).to.equal(0)
		done()
	}
}

describe('actions', () => {
	it('addNote', (done) => {
		const state = store.state
		testAction(actions.addNote, [], state, [
			{ type: 'addNote' }
		], done)
	})

	it('updateActiveNote', (done) => {
		const state = store.state
		const note = state.notes[0]

		testAction(actions.updateActiveNote, [note], state, [
			{ type: 'setActiveNote', payload: {favorite: false, text: 'Neue Notiz'} }
		], done)
	})

})
