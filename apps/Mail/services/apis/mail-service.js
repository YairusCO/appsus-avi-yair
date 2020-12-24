var msgs = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930595 },
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930596 },
]



window.theMsgs = msgs;

function query() {
    return Promise.resolve(msgs)
}

export const mailService = {
    query
}