import { noteService } from "../../services/note-service.js";
import { NoteList } from "./NoteList.jsx";
import { AddNote } from "./AddNote.jsx";

export class KeepApp extends React.Component {

    state = {
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
        noteService.saveNote(this.state.notes, note)
            .then(notes => this.setState({ notes }))
        // this.loadBook()
    }
  




    render() {
        return (
            <section>

                <h1 >Keep.</h1>
                <AddNote addNote={this.addNote} />
                <NoteList notes={this.getNotesForDisplay()} />


            </section>
        )
    }
}

