
export class AddNote extends React.Component {

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

 


    onAddNote = (ev) => {
        ev.preventDefault();
        this.props.addNote(this.state.note);
    }

    onInputChange = (ev) => {
        const value = ev.target.type === 'number' ? +ev.target.value
        : ev.target.value;

        const noteCopy = JSON.parse(JSON.stringify(this.state.note))
        noteCopy.info[ev.target.name] = value;

        this.setState({
            note: noteCopy
        });

       
    }

    render() {

        const { note } = this.state
        return (<section className="form-note">
            <form className="form-input" onSubmit={this.onAddNote}>
                <input className="keep-input" value={note.info.txt} onChange={this.onInputChange} type="text" name="txt" placeholder="What's on your mind?" />
            </form>
        </section>
        )

    }
}