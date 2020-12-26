import  { MsgPreview } from './MsgPreview.jsx'
const {Link} = ReactRouterDOM
export function MailList({ msgs, onRemove , onRead}) {

    return (
        <section className="msg-list">
            {msgs.map(msg => {
                return    <Link key={msg.id} to={`msg/${msg.id}`}>
                <MsgPreview key={msg.id} msg={msg}
                    onRemove={onRemove}  onRead={onRead} />
                    </Link>
            })
            }
        </section>
    );
}