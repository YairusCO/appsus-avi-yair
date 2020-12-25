const { Link } = ReactRouterDOM;
export function NotePreview({ note, onRemove, onEdit }) {


    return (
            <article className="note-preview" >
                <button onClick={(ev) => {
                    ev.preventDefault();
                    onRemove(note.id);
                }}>X</button>

                <h4 contentEditable="true"
                onInput={(ev) => {console.log(note.id, 'txt:', ev.currentTarget.textContent)
                    ev.preventDefault();
                    onEdit(note.id, ev.currentTarget.textContent)
                }}
                >{note.info.txt}</h4>



            </article>
     
    );




}
