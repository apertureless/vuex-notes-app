export const mutations = {
	addNote (state) {
		const newNote = {
			text: 'Neue Notiz',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},

	editNote (state, text) {
		state.activeNote.text = text
	},

	deleteNote (state) {
		let index = state.notes.indexOf(state.activeNote)
		state.notes.splice(index, 1)
		state.activeNote = state.notes[0]
	},

	toggleFavorite (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},

	setActiveNote (state, note) {
		state.activeNote = note
	},
}
