import * as getters from '../../vuex/getters'

describe('getters', () => {
	const state = {
		notes: [
	    		{ text: 'Mock', favorite: false },
				{ text: 'Mock2', favorite: true },
				{ text: 'Mock3', favorite: false },
    		],
		activeNote: {}
	}


	it('notes', () => {
		// Get results with mocked state
		const result = getters.notes(state)

		// Assign results with state
		expect(result).to.deep.equal(state.notes)
	})

	it('activeNote', () => {
		state.activeNote = state.notes[1]
		const result = getters.activeNote(state)

		expect(result).to.deep.equal(state.activeNote)
	})

	it('activeNoteText', () => {
		state.activeNote = state.notes[1]
		const result = getters.activeNoteText(state)

		expect(result).to.equal('Mock2')
	})
})
