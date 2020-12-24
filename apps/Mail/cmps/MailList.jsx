import  { MsgPreview } from './MsgPreview.jsx'

export function MailList({ msgs, onRemove }) {

    return (
        <section className="msg-list">
            {msgs.map(msg => {
                return <MsgPreview key={msg.id} msg={msg}
                    onRemove={onRemove} />;
            })
            }
        </section>
    );
}