const { Link } = ReactRouterDOM;
export function NotePreview({ note, onRemove, onEdit, onChangeColor }) {


    return (

        <article className={`note-preview ${note.backgroundColor}`} onFocus={(ev) => {
            ev.preventDefault();
            ev.currentTarget.style.backgroundColor = '';

        }}>
            <button className="deleteBtn" onClick={(ev) => {
                ev.preventDefault();
                onRemove(note.id);
            }}>X</button>

            <h4 contentEditable="true"
                onBlur={(ev) => {
                    // console.log(note.id, 'txt:', ev.currentTarget.textContent)
                    ev.preventDefault();
                    ev.currentTarget.style.backgroundColor = '';
                    onEdit(note.id, ev.currentTarget.textContent)
                }}
                onFocus={(ev) => {
                    ev.preventDefault();
                    ev.currentTarget.style.backgroundColor = '#d1e6ad';
                }}


            >{note.info.txt}</h4>

            <button className="colorBtn white" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "white");
            }}>o</button>

            <button className="colorBtn yellow" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "yellow");
            }}>o</button>

            <button className="colorBtn purple" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id,"purple");
            }}>o</button>

            <button className="colorBtn green" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "green");
            }}>o</button>

            <button className="colorBtn pink" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "pink");
            }}>o</button>


        </article >

    );




}
