import { storageService } from "../services/storage-service.js";
import { utilService } from '../services/util-service.js';


export const noteService = {
    query,
    remove,
    edit,
    changeBgc,
    getById,
    saveNote

};
///
const KEY = 'notesDB';


var gNotes = _createNotes();



window.theNotes = gNotes

function query() {
    return Promise.resolve(gNotes);
}


function _createNotes() {
    var notesFromStorage = storageService.loadFromStorage(KEY);
    if (!notesFromStorage || !notesFromStorage.length) {
        notesFromStorage = getNotes();
    }
    _saveNotesToStorage(notesFromStorage);
    return notesFromStorage;
}

function getById(id) {
    var note = gNotes.find(note => note.id === id)
    return Promise.resolve(note)
}



function saveNote(note) {
    note.id = utilService.makeId()
    note.createdAt = Date.now()
    gNotes.unshift(note)

    _saveNotesToStorage();

    return Promise.resolve(gNotes)
}

function edit(noteId, updated) {
    var note = gNotes.find(note => note.id === noteId);
    note.info.txt = updated
    _saveNotesToStorage();
    return Promise.resolve(gNotes);

}

function changeBgc(noteId, color) {
    var note = gNotes.find(note => note.id === noteId);
    note.backgroundColor = color;
    _saveNotesToStorage();
    return Promise.resolve(gNotes);

}


function remove(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId);
    return Promise.resolve(gNotes);
}

function _saveNotesToStorage(notesFromStorage = gNotes) {
    storageService.saveToStorage(KEY, notesFromStorage)
}

function getNotes() {
    var notes = [
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "2 lbs ground beef, salt and pepper, 2 Tablespoons butter, 2 Tablespoons all-purpose flour, 1/4 teaspoon mustard powder, 3/4 cup beer"
            },
            backgroundColor: "yellow",
            createdAt: Date.now()
       
        },

        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Barça have had 12 different goalscorers in LaLiga, more than their closest rivals Betis and Valladolid with 11 each. Cadiz, Elche and Eibar round off the top three with 6."
            },
            backgroundColor: "purple",
            createdAt: Date.now()
        },

        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Allow creating, updating and deleting notes (CRUD)"
            },
            backgroundColor: "green",
            createdAt: Date.now()
        },
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "For React, here is the basic idea of implementing Dynamic components"
            },
            backgroundColor: "pink",
            createdAt: Date.now()
        }

    ]
    return notes;
}
