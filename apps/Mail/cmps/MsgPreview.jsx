const { Link } = ReactRouterDOM;

export function MsgPreview({ msg, onRemove, onRead }) {
  return (
    <div className="msg-preview">
    <div className="inner-pre">
    <Link className="h-link" key={msg.id} to={`msg/${msg.id}`}>   <h1 className="none">{msg.subject}</h1> 
      
     <h2 className="none">{msg.body}</h2> 
      
        {" "}
        <div className="none">{`${new Date(msg.sentAt).toLocaleDateString()}`}</div> </Link>
      
          <div>
        <button className="btn-mail" onClick={() => {  onRemove(msg.id); }} >  X  </button>
        <button  className="btn-mail" onClick={() => {  onRead(msg.id);   }} > ! </button>
        </div>
      </div>
    </div>
  );
}
