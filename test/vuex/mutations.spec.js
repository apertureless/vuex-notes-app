import { mutations } from '../../vuex/mutations'

// destructure assign mutations
const { addNote, editNote, deleteNote } = mutations

describe('mutations', () => {
	it('addNote', () => {
		// mock state
    	const state = { notes: [] }

		// apply mutation
		addNote(state)
		// assert result
		expect(state.notes).to.be.an('array')
		expect(state.notes[0].text).to.equal('Neue Notiz')
	})

	it('deleteNote', () => {
		// mock state
    	const state = {
    		notes: [
	    		{
					text: 'Mock',
					favorite: false
				}
    		]
    	}

		// Check State
		expect(state.notes).to.be.an('array')
		expect(state.notes[0].text).to.equal('Mock')

		deleteNote(state)

		expect(state.notes).to.be.empty
	})

	it('editNote', () => {
		// mock state
    	const state = {
    		notes: [
	    		{
					text: 'Mock',
					favorite: false
				}
    		],
    		activeNote: {}
    	}

		// Check State
		expect(state.notes).to.be.an('array')
		expect(state.notes[0].text).to.equal('Mock')

		// mock new text
		let text = 'nextindex'

		// EditNote is working with activeNote, so active note needs to be set.
		state.activeNote = state.notes[0]

		editNote(state, text)

		expect(state.notes[0].text).to.equal('nextindex')
	})
})
