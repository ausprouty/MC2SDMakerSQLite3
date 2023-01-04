

import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";


export default {
  async initialize(route){
	try {
		const sqlite = new SQLiteConnection(CapacitorSQLite);
		let db =  await this.openDatabase()
		var coll = document.getElementsByClassName("textarea");

        const query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		for (var i = 1; i <= coll.length; i++) {
			var noteid ='note' + i + 'Text'
			values = [route, noteid]
            alert ('values known')
			var res = await db.query(query, values)
			alert ('I ran query')
			if (res.values[0] !== undefined){
                alert (res.values[0].noteid  + '|' + res.values[0].note)
				document.getElementById(noteid).value = res.values[0].note
			}
			else{
				alert ('I have nothing to say')
			}
			document.getElementById(noteid).value = 'I can enter text'
		}
		alert (' finihsed loop')
		await sqlite.closeConnection("db_mc2notes");
	} catch (err) {
		alert (' error in Intialiaze')
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}

  },
  async addNote(noteid, route){
	try {
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        let db =  await this.openDatabase()
		var noteText = document.getElementById(noteid).value
		let query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		let values = [route, noteid]
		let res = await db.query(query, values);
		if (res.values[0] !== undefined) {
		    query = 'UPDATE notes set note = ?  WHERE page=? AND noteid = ?'
            alert ('I am updating '+ res.values[0].note)
		}
		else{
			query = 'INSERT INTO notes (note, page, noteid) VALUES (?, ?, ?)'
             console.log ('I am inserging')
		}
        console.log (noteText + ' |' + route + '|' + noteid)
		values = [noteText, route, noteid]
		res = await db.execute(query, values);
		query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
		values = [route, noteid]
		res = await db.query(query, values);
        console.log (res.values)
        alert (res.values[0].note)

	} catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}
  },
  async openDatabase(){
    try {
		const sqlite = new SQLiteConnection(CapacitorSQLite);
        const ret = await sqlite.checkConnectionsConsistency();
		console.log(`after checkConnectionsConsistency ${ret.result}`);
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
		await db.open();
        return db
    } catch (err) {
		console.log(`Error: ${err}`);
		throw new Error(`Error: ${err}`);
	}

  }


}