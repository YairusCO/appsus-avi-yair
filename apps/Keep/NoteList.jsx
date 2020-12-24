import { NotePreview } from "./NotePreview.jsx";
const {Link} = ReactRouterDOM

export function NoteList({ notes, onRemove }) {

    return (
        notes.map(note => {
            return (
                    // <Link key={note.id} to={`note/${note.id}`}>
                    <NotePreview key={note.id} note={note} onRemove={onRemove} />
                    // </Link>

            )
            
        })
    );
}

// import { PetPreview } from "./PetPreview.jsx";

// export function PetList({ pets, onRemove }) {

//     return (
//         pets.map(pet => {
//             return <PetPreview key={pet.id} pet={pet}
//              onRemove={onRemove} />;
//         })
//     );
// }