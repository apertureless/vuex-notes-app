import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'local-storage'
import middlewares from './middlewares'


Vue.use(Vuex)
export const STORAGE_KEY = 'noot-notes'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  ls.clear()
}

const state = {
	notes: JSON.parse(ls.get(STORAGE_KEY) || '[]'),
	activeNote: {}
}

const mutations = {
	ADD_NOTE (state) {
		const newNote = {
			text: 'Neue Notiz',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	EDIT_NOTE (state, text) {
		state.activeNote.text = text
	},
	DELETE_NOTE (state) {
		state.notes.$remove(state.activeNote)
		state.activeNote = state.notes[0]
	},
	TOGGLE_FAVORITE (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	SET_ACTIVE_NOTE (state, note) {
		state.activeNote = note
	},
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})
