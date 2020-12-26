const { Link } = ReactRouterDOM;

export function MsgPreview({ msg, onRemove, onRead }) {
  return (
    <div className="msg-preview">
    
        <h1 className="none">{msg.subject}</h1>
      
      <h2 className="none">{msg.body}</h2>
      <div>
        {" "}
        <div className="none">{`${new Date(msg.sentAt).toLocaleDateString()}`}</div>
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
          !
        </button>
      </div>
    </div>
  );
}
