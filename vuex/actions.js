export const addNote = ({ commit }) => commit('addNote')
export const editNote = ({ commit }, e) => commit('editNote', e.target.value)
export const deleteNote = ({ commit }) => commit('deleteNote')

export const updateActiveNote = ({ commit }, note) => commit('setActiveNote', note)

export const toggleFavorite = ({ commit }) => commit('toggleFavorite')
