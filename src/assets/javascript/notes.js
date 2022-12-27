
export function useShowNotes(page) {
    var response = localStorage.getItem(page);
    if (!response) {
      console.log ('there are no notes to show')
      return;
    }
    var notes = JSON.parse(response);
    var len = notes.length;
    var notePlace = null;
    for (var i = 0; i < len; i++) {
      notePlace = document.getElementById(notes[i].key);
      if (notePlace) {
        notePlace.value = notes[i].value;
        notePlace.style.height = calcNoteHeight(notePlace.value) + 'px'
      }
    }
    return;
  }

export function useAddNote(notesPage, noteId) {
  // resize active Note
    var activeNote=document.getElementById(noteId);
    activeNote.style.height = calcNoteHeight(activeNote.value) + 'px'
    // find ids of all textareas
    var txtAreas = document.getElementsByTagName("textarea");
    var len = txtAreas.length;
    var ids = new Array();
    var notes = new Array();
    for (var i = 0; i < len; i++) {
      ids.push(txtAreas[i].id);
    }
    for (i = 0; i < len; i++) {
      var note = document.getElementById(ids[i]);
      var entry = new Object();
      entry.key = ids[i];
      entry.value = note.value;
      console.log(entry);
      notes[i] = entry;
    }
    localStorage.setItem(notesPage, JSON.stringify(notes)); //put the object back
  }

  // Dealing with Textarea Height
  // from https://css-tricks.com/auto-growing-inputs-textareas/
function calcNoteHeight(value) {

  let numberOfLineBreaks = (value.match(/\n/g) || []).length
  // look for long lines
  var longLines = 0
  var extraLines = 0
  var lineMax = window.innerWidth / 7
  console.log ('linemax = '+ lineMax)
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
