import { NotePreview } from "./NotePreview.jsx";
const {Link} = ReactRouterDOM

export function NoteList({ notes, onRemove, onEdit, onChangeColor }) {

    return (
        notes.map(note => {
            return (
                    // <Link key={note.id} to={`note/${note.id}`}>
                    <NotePreview key={note.id} note={note} onRemove={onRemove} onEdit={onEdit} onChangeColor={onChangeColor}  />
                    
                    // </Link>

            )
            
        })
    );
}

