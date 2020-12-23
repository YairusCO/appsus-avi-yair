
export class AddNote extends React.Component {

    state = {

        note: {
            id: '',
            type: 'NoteText',
            info: {
                txt: ''
            }
        }
    };

    onAddNote = (ev) => {
        ev.preventDefault();
        this.props.addNote(this.state.note)

    }

    onInputChange = (ev) => {
        const value = ev.target.type === ev.target.value;

        const noteCopy = { ...this.state.note };
        noteCopy[ev.target.name] = value;

        this.setState({
            note: noteCopy
        });
    }

    render() {

        const { note } = this.state
        return (<section className="form-note">
            <form onSubmit={this.onAddNote}>
                <div>
                    <label htmlFor="" className="newNote">Take a Note:</label>
                    <textarea value={note.info.txt} onChange={this.onInputChange} name="note" id="" cols="20" rows="10"></textarea>
                </div>
                <button className="keep-btn" type="submit">KEEP</button>
            </form>
        </section>
        )

    }
}