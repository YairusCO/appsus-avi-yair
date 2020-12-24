import  { MsgPreview } from './MsgPreview.jsx'

export function MailList({ msgs, onRemove }) {

    return (
        <section className="msg-list">
            {msgs.map((msg,idx) => {
                return <MsgPreview key={`mail-${idx}`} msg={msg}
                    onRemove={onRemove} />;
            })
            }
        </section>
    );
}