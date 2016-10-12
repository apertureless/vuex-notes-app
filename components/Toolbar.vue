<template>
	<div id="toolbar">
		<i @click="addNote" class="glyphicon glyphicon-plus"></i>
		<i @click="toggleFavorite"
			class="glyphicon glyphicon-heart"
			:class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>

<script>
import key from 'keymaster'
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters([
    	'activeNote'
  	]),
	methods: mapActions([
	    'addNote',
		'deleteNote',
		'toggleFavorite'
	]),

 	mounted () {
 		key('c', () => {
 			this.addNote()
 		});
 		key('d', () => {
 			console.log('you pressed a!')
 			this.deleteNote()
 		});
 	}
}
</script>
