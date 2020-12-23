export function MailList({ msgs, onRemove }) {

    return (
        <section className="msg-list">
            {msgs.map(msg => {
                return <MsgPreview  msg={msg}
                    onRemove={onRemove} />;
            })
            }
        </section>
    );
}