

import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";


export default {
  async notes (route){
	try {
		const sqlite = new SQLiteConnection(CapacitorSQLite);
		let db =  await this.openDatabase()
        let query = 'SELECT * FROM notes WHERE page=?'
		var res = await db.query(query,  [route])
		await sqlite.closeConnection("db_mc2notes");
        return res.values
	} catch (err) {
		alert (' error in SQLite Service Notes')
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}

  },
  async addNote(noteid, route, noteText){
	try {
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        let db =  await this.openDatabase()
		let query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		let values = [route, noteid]
		let res = await db.query(query, values);
		if (res.values[0] !== undefined) {
		    query = 'UPDATE notes set note = ?  WHERE page=? AND noteid = ?'
		}
		else{
			query = 'INSERT INTO notes (note, page, noteid) VALUES (?, ?, ?)'
		}
		values = [noteText, route, noteid]
		res = await db.query(query, values);
		query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		values = [route, noteid]
		res = await db.query(query, values);

        return this.calcNoteHeight(res.values[0].note) +'px'

	} catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}
  },
  async openDatabase(){
    try {
		const sqlite = new SQLiteConnection(CapacitorSQLite);
        const ret = await sqlite.checkConnectionsConsistency();
		//console.log(`after checkConnectionsConsistency ${ret.result}`);
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
