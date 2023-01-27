

import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

export default {
	async notes (route){
		var source = localStorage.getItem('mc2NoteSource');
		if (source == 'database'){
			return await notesFromDatabase(route)
		}
		return notesFromLocalStorage(route)
	},

	async addNote(noteid, route, noteText){
		var source = localStorage.getItem('mc2NoteSource');
		if (source == 'database'){
			return await addNoteToDatabase(noteid, route, noteText)
		}
		return addNoteToLocalStorage(noteid, route, noteText)
	},
	async openDatabase(){
		try {
			const sqlite = new SQLiteConnection(CapacitorSQLite);
			const ret = await sqlite.checkConnectionsConsistency();

			const isConn = (await sqlite.isConnection("db_mc2notes")).result;
			//console.log(`after isConnection ${isConn}`);
			let db;
			if (ret.result && isConn) {
				//console.log("I am retreiving connection")
				db = await sqlite.retrieveConnection("db_mc2notes");
			} else {
				//console.log("I am creating  connection")
				db = await sqlite.createConnection("db_mc2notes", false, "no-encryption", 1);
			}
			await db.open();
			return db
		} catch (err) {
			console.log(`Error: ${err}`);
			throw new Error(`Error: ${err}`);
		}

	},
	async notesFromDatabase(route){
			try {
				const sqlite = new SQLiteConnection(CapacitorSQLite);
				let db =  await this.openDatabase()
				let query = 'SELECT * FROM notes WHERE page=?'
				var res = await db.query(query,  [route])
				alert (res)
				await sqlite.closeConnection("db_mc2notes");
				return res.values
			} catch (err) {
				alert (' error in SQLite Service Notes')
				console.log(`Error: ${err}`);
				throw new Error(`Error: ${err}`);
			}
	},
	async notesFromLocalStorage(route){
			var notes = JSON.parse(localStorage.getItem('Notes'+ route));
			return notes;

	},

    addNoteToLocalStorage(noteid, route, noteText){
		console.log('In add_note for ' + noteid)
		// resize note
		document.getElementById(noteid).style.height =
			calcNoteHeight(noteText) + 'px'
		// find ids of all textareas
		var txtAreas = document.getElementsByTagName('textarea')
		var len = txtAreas.length
		var ids = new Array()
		var notes = new Array()
		for (i = 0; i < len; i++) {
			ids.push(txtAreas[i].id)
		}
		for (var i = 0; i < len; i++) {
			var note = document.getElementById(ids[i])
			var entry = new Object()
			entry.key = ids[i]
			entry.value = note.value
			console.log(entry)
			notes[i] = entry
		}
		localStorage.setItem('Notes'+ route, JSON.stringify(notes)) //put the object back
	},


  // Dealing with Textarea Height
	// from https://css-tricks.com/auto-growing-inputs-textareas/
	calcNoteHeight(value) {
	let numberOfLineBreaks = (value.match(/\n/g) || []).length
	// look for long lines
	var longLines = 0
	var extraLines = 0
	var lineMax = window.innerWidth / 7
	console.log('linemax = ' + lineMax)
	const line = value.split('/\n')
	var len = line.length
	for (var i = 0; i < len; i++) {
		if (line[i].length > lineMax) {
		extraLines = Math.round(line[i].length / lineMax)
		longLines += extraLines
		}
	}
	// min-height + lines x line-height + padding + border
	let newHeight = 20 + (numberOfLineBreaks + longLines) * 20 + 12 + 2
	return newHeight
	}
}
