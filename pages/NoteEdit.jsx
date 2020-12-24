import { noteService } from "../services/note-service.js";

export class NoteEdit extends React.Component {

    state = {

        note:    {
            id: '',
            type: 'NoteText',
            isPinned: false,
            info: {
                txt: ''
            }
        }
    };


    elInput = React.createRef();

    componentDidMount() {
        const { notetId } = this.props.match.params;

        console.log('this.elInput:', this.elInput);
        this.elInput.current.focus();

        if (!noteId) return;
        noteService.getById(notetId).then(note => {
            this.setState({ note });
        });
    }


    onEditNote = (ev) => {
        ev.preventDefault();
        noteService.editNote(this.state.nite);
        this.props.history.push('/keep');

    };

    onInputChange = (ev) => {

        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;

        const noteCopy = { ...this.state.note };
        noteCopy.info[ev.target.name] = value;
        this.setState({
            note: noteCopy
        });
    };


    render() {
        return (
            <form onSubmit={this.onEditNote}>

                <input value={this.state.note.info.txt} ref={this.elInput}
                    placeholder="Update your KEEP" type="text" name="name"
                    onChange={this.onInputChange} />



                <button type="submit">UPDATE</button>
            </form>
        );
    }
}
