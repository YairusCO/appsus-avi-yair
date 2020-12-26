import { storageService } from "../services/storage-service.js";
import { utilService } from '../services/util-service.js';


export const noteService = {
    query,
    remove,
    edit,
    changeBgc,
    // pinItem,
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

// function pinItem(noteId){
//     var note = gNotes.find(note => note.id === noteId);
//     note.isPinned= true;
//     var idx = gNotes.indexOf(note)
//     gNotes.unshift(note);
//     gNotes.splice(idx, 1);
//     _saveNotesToStorage();
//     return Promise.resolve(gNotes);

// }

function edit(noteId, updated) {
    var note = gNotes.find(note => note.id === noteId);
    note.info.txt = updated;
    note.updatedAt = Date.now();
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
                txt: "Barça have had 12 different goalscorers in LaLiga, more than their closest rivals Betis and Valladolid with 11 each."
            },
            backgroundColor: "white",
            createdAt: Date.now(),
            
        },

        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Allow creating, updating and deleting notes (CRUD)",
                // imgUrl: "https://therichpost.com/wp-content/uploads/2020/08/Reactjs-create-and-include-hedar-footer-files-1400x700.png"
            },
            backgroundColor: "green",
            createdAt: Date.now(),
            updatedAt: 1608990533129
        },
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "For React, here is the basic idea of implementing Dynamic components",
                // imgUrl: "https://www.motocms.com/blog/wp-content/uploads/2017/09/featured-3.jpg"
            },
            backgroundColor: "white",
            createdAt: Date.now()
        },

        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "The first Netflix series from Shonda Rhimes’s company updates the genre with modern race and gender attitudes (and lots of skin).",
            },
            backgroundColor: "pink",
            createdAt: Date.now(),
            updatedAt: 1608990533129
        },

        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Isolation was unavoidable this year: Some albums embraced it, some raged against it, some tried to imagine a world without it.",
            },
            backgroundColor: "purple",
            createdAt: Date.now()
        }


    ]
    return notes;
}
