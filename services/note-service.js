import { storageService } from "../services/storage-service.js";


export const noteService = {
  query,
  getById,
  saveNote,

};
///
const KEY = 'notesDB';


var gNotes = [
    {
        type: "NoteText",
        isPinned: false,
        info: {
          txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        info: {
          txt: "Render a list of components, use dynamic components to show different types of notes"
        }
    },

    {
        type: "NoteText",
        isPinned: false,
        info: {
          txt: "Allow creating, updating and deleting notes (CRUD)"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        info: {
          txt: "For React, here is the basic idea of implementing Dynamic components"
        }
    }

]


window.theNotes = gNotes

function query() {
  // return gBooks;
  return Promise.resolve(gNotes);
}


function _createNotes() {
  var notesFromStorage = storageService.loadFromStorage(KEY)
  if (!notesFromStorage || !notesFromStorage.length) {
    notesFromStorage = gNotes
  }
  _saveNotesToStorage(notesFromStorage);
  return notesFromStorage
}

function getById(id) {
  var note = gNotes.find(note => note.id === id)
  return Promise.resolve(note)
}

// function saveNote(note) {
//   if (!book.reviews) book.reviews = [];
//   book.reviews.push(review)
//   _saveBooksToStorage();
//   console.log(book);
//   return Promise.resolve(book)
// }

// function _saveBooksToStorage(booksFromStorage = gBooks) {
//   storageService.saveToStorage(KEY, booksFromStorage)
// }
