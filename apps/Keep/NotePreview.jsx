export function NotePreview({ note, onRemove }) {


    return (
    
    <article className="note-preview" >
        <button onClick={(ev) => {
                ev.preventDefault(); 
                onRemove(note.id);
            }}>X</button>
        <h4>{note.info.txt}</h4>
        


    </article>
    );




}