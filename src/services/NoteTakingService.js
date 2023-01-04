

import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

const sqlite = new SQLiteConnection(CapacitorSQLite);
export default {
  async initialize(route){
	try {
		let db =  await this.openDatabase()
		var coll = document.getElementsByClassName("textarea");
		var i;
		var noteid;
		var thisNote
		console.log(coll.length)
		for (i = 1; i <= coll.length; i++) {
			noteid ='note' + i + 'Text'
			values = [route, noteid]
			res = await db.query(query, values);
			if (res.values[0] !== undefined){
				thisNote = document.getElementById(noteid);
				thisNote.value = res.values[0].note
			}
		}
		await sqlite.closeConnection("db_mc2notes");
	} catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}

  },
  async addNote(noteid, route){
	try {
        let db =  await this.openDatabase()
		var noteText = document.getElementById(noteid).value
		let query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		let values = [route, noteid]
		let res = await db.query(query, values);
		if (res.values[0] !== undefined) {
		    query = 'UPDATE notes set note = ?  WHERE page=? AND noteid = ?'
            console.log ('I am updating')
		}
		else{
			query = 'INSERT INTO notes (note, page, noteid) VALUES (?, ?, ?)'
             console.log ('I am inserging')
		}
        console.log (noteText)
		values = [noteText, route, noteid]
		res = await db.query(query, values);

		query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		values = [route, noteid]
		res = await db.query(query, values);
        console.log (res.values)
		this.notices = res.values[0].note

	} catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}
  },
  async openDatabase(){
    try {
        const ret = await sqlite.checkConnectionsConsistency();
		console.log(`after checkConnectionsConsistency ${ret.result}`);
		console.log(ret.result)
		const isConn = (await sqlite.isConnection("db_mc2notes")).result;
		console.log(`after isConnection ${isConn}`);
		let db;
		if (ret.result && isConn) {
			console.log("I am retreiving connection")
			db = await sqlite.retrieveConnection("db_mc2notes");
		} else {
			console.log("I am creating  connection")
			db = await sqlite.createConnection("db_mc2notes", false, "no-encryption", 1);
		}
		console.log(`after create/retrieveConnection ${JSON.stringify(db)}`);
		await db.open();
        return db
    } catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}

  }


}