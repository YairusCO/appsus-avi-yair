import { storageService } from "../services/storage-service.js";
import { utilService } from '../services/util-service.js';


export const noteService = {
    query,
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
    gNotes.push({note})
    _saveNotesToStorage();

    return Promise.resolve(gNotes)
}

function _saveNotesToStorage(notesFromStorage = gNotes) {
    storageService.saveToStorage(KEY, notesFromStorage)
}

function getNotes() {
    var notes = [
        {
            id: '1234a',
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: '5678b',
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Render a list of components, use dynamic components to show different types of notes"
            }
        },

        {
            id: '91011c',
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Allow creating, updating and deleting notes (CRUD)"
            }
        },
        {
            id: '121314d',
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "For React, here is the basic idea of implementing Dynamic components"
            }
        }

    ]
    return notes;
}
