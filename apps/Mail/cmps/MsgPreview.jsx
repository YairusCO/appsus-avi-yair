const { Link } = ReactRouterDOM;


export function MsgPreview({ msg, onRemove }) {

    return <article className="msg-preview">
        {/* <Link to={`/msg/${msg.id}`}> */}
            <h1>{msg.subject}</h1>
        {/* </Link> */}
        <h2>body: {msg.body}</h2>
        <div>   <div>
                {`${new Date(msg.sentAt)}`}
                </div>

            {/* <Link to={`/msg/edit/${msg.id}`}>Edit msg</Link> */}
            <button onClick={() => {
                onRemove(msg.id)
            }}
            >Remove</button>
        </div>

    </article>

}