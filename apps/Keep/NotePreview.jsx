const { Link } = ReactRouterDOM;
export function NotePreview({ note, onRemove, onEdit, onChangeColor, onPin }) {


    return (

        <article className={`note-preview ${note.backgroundColor}`} onFocus={(ev) => {
            ev.preventDefault();
            ev.currentTarget.style.backgroundColor = '';

        }}>
            <button className="deleteBtn" onClick={(ev) => {
                ev.preventDefault();
                onRemove(note.id);
            }}>X</button>

            <img className="note-img" src={`${note.info.imgUrl}`} alt="" />

            <h4 contentEditable="true"
                onBlur={(ev) => {
                    // console.log(note.id, 'txt:', ev.currentTarget.textContent)
                    ev.preventDefault();
                    onEdit(note.id, ev.currentTarget.textContent);
                    ev.currentTarget.style.backgroundColor = '';

                }}
                onFocus={(ev) => {
                    ev.preventDefault();
                    ev.currentTarget.style.backgroundColor = 'yellow';
                }}


            >{note.info.txt}</h4>

            <p className="created-at">Created at {`${new Date(note.createdAt)}`}</p>
            <p className={note.updatedAt ? "updated-at": "hidden"}>Updated at {`${new Date(note.updatedAt)}`}</p>


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
                onChangeColor(note.id, "purple");
            }}>o</button>

            <button className="colorBtn green" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "green");
            }}>o</button>

            <button className="colorBtn pink" onClick={(ev) => {
                ev.preventDefault();
                onChangeColor(note.id, "pink");
            }}>o</button>

            {/* <button onClick={(ev) => {
                ev.preventDefault();
                onPin(note.id, "pink");
            }}>pin</button>
 */}




        </article >

    );




}
