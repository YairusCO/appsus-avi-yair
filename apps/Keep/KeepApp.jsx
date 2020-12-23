import { noteService } from "../../services/note-service.js";
import { NoteList } from "./NoteList.jsx";

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




    render() {
        return (
            <section>

                <h1 >Keep.</h1>

                <NoteList notes={this.getNotesForDisplay()} />


            </section>
        )
    }
}

