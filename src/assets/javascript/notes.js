

import { getCurrentInstance } from 'vue'

export async function useShowNotes(page) {

  let sqlcmd = 'SELECT * FROM  notes  WHERE page = ? '
  let values = [page]
  console.log(values)
  res = await db.query(sqlcmd, values)
  console.log(res)
  console.log('I looked for notes to show')
  return
}
export async function useAddNote(notesPage, noteId) {
  let sqlcmd = 'SELECT note FROM notes  WHERE page = ? AND noteid = ?'
  let values = [notesPage, noteId]
  let res = await db.query(sqlcmd, values)
  if (res) {
    let sqlcmd = 'UPDATE notes SET note = ? WHERE page = ? AND noteid = ?'
    values = [activeNote.value, notesPage, noteId]
    res = await db.query(sqlcmd, values)
  } else {
    let sqlcmd = 'INSERT INTO notes (page, noteid, note) VALUES (?,?,?)'
    values = [activeNote.value, notesPage, noteId]
    res = await db.query(sqlcmd, values)
  }
}


async function intializeDatabase(){
    await db.open()
    console.log(`db.open()`)
    const createTable = `
        CREATE TABLE IF NOT EXISTS notes (
            page   VARCHAR NOT NULL,
            noteid VARCHAR NOT NULL,
            note TEXT,
            CONSTRAINT note_index PRIMARY KEY (page, noteid)
        ); `
    const res = await db.execute(createTable)
    if (res.changes && res.changes.changes && res.changes.changes < 0) {
      throw new Error(`Error: execute failed`)
    }
    await sqlite.closeConnection('db_mc2')
}

// Dealing with Textarea Height
// from https://css-tricks.com/auto-growing-inputs-textareas/
function calcNoteHeight(value) {
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
