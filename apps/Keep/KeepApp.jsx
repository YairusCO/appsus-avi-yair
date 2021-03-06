import { noteService } from "../../services/note-service.js";
import { NoteList } from "./NoteList.jsx";
import { NotePreview } from "./NotePreview.jsx";
import { AddNote } from "./AddNote.jsx";



export class KeepApp extends React.Component {

    state = {
        // id: '',
        notes: [],
        filterBy: {
            txt: ''
        }

    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes });
        });
    };

    getNotesForDisplay = () => {
        const { filterBy } = this.state;
        return this.state.notes.filter(note => {
            return note.info.txt.toLowerCase().includes(filterBy.txt.toLowerCase())

        });
    };

    addNote = (note) => {
        noteService.saveNote(note)
            .then(() => {
                this.loadNotes();
            });
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId).then(() => {
            this.loadNotes();
        });
    };

    onEditNote = (noteId, updated) => {

        noteService.edit(noteId, updated).then(() => {
            this.loadNotes();
        });
    };

    changeColor = (noteId, color) => {

        noteService.changeBgc(noteId, color).then(() => {
            this.loadNotes();
        });
    };

    pinNote = (noteId) => {

        noteService.pinItem(noteId).then(() => {
            this.loadNotes();
        });
    };



    render() {
        return (
            <section>
                <img className="misskeep" src="assets/img/misskeep.png" />
                <h2 className="misskeepLogo">Miss Keep</h2>
                <AddNote addNote={this.addNote} />
                <div className="note-list">
                <NoteList notes={this.getNotesForDisplay()} onRemove={this.onRemoveNote} onEdit={this.onEditNote} onChangeColor={this.changeColor} onPin={this.pinNote} />
                </div>

            </section>
        )
    }
}

