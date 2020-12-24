export function Notes({ note }) {
 
    return <article className="notes">
        
     
        {note.notes.map((note, idx) =>
            <section className="note" key={idx}>
   
                <h4>{note.info.txt}</h4>

            </section>)}
    </article>
}