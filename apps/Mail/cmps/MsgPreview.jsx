const { Link } = ReactRouterDOM;

export function MsgPreview({ msg, onRemove, onRead }) {
  return (
    <article className="msg-preview">
    
        <h1>{msg.subject}</h1>
      
      <h2>body: {msg.body}</h2>
      <div>
        {" "}
        <div>{`${new Date(msg.sentAt)}`}</div>
        {/* <Link to={`/msg/edit/${msg.id}`}>Edit msg</Link> */}
        <button
          onClick={() => {
            onRemove(msg.id);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            onRead(msg.id);
          }}
        >
          .
        </button>
      </div>
    </article>
  );
}
