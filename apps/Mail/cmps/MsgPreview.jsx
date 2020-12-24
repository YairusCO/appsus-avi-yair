
export const MsgPreview = ({ msg }) => {
    const { subject, body, sentAt, isRead } = msg
    return (
        <div>

            <div>
                {subject}
            </div>  
            <div>
                <div>
                {`${new Date(sentAt)}`}
                </div>
                <div>
                {body}
                </div>
            </div>
        </div>
    )
}