import { storageService } from "../../../services/storage-service.js"

const KEYMSG = 'msg';
var gMsgs;
_createMsgs();

export const mailService = {
    query,
    remove,
    isRead
}

function _createMsgs() {
    gMsgs = storageService.loadFromStorage(KEYMSG);
    if (!gMsgs || !gMsgs.length) {
        gMsgs = _getDemoMsgs()
        storageService.saveToStorage(KEYMSG, gMsgs);
    }
}

//localStorage.clear();

function _getDemoMsgs() {
    var msgs = [
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1451133930594, id: 1, category: "inbox" },
        { subject: 'hello', body: 'Pick up!', isRead: true, sentAt: 1551133930595, id: 2, Category: "inbox" },
        { subject: 'bye!', body: 'Pick up!', isRead: false, sentAt: 1651133930596, id: 3, Category: "inbox" },
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1451133930594, id: 4, Category: "inbox" },
        { subject: 'hello', body: 'Pick up!', isRead: true, sentAt: 1551133930595, id: 5, Category: "inbox" },
        { subject: 'bye!', body: 'Pick up!', isRead: false, sentAt: 1651133930596, id: 6, Category: "inbox" },
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1451133930594, id: 7, Category: "send" },
        { subject: 'hello', body: 'Pick up!', isRead: true, sentAt: 1551133930595, id: 8, Category: "send" },
        { subject: 'bye!', body: 'Pick up!', isRead: false, sentAt: 1651133930596, id: 9, Category: "send" },
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1451133930594, id: 10, Category: "send" },
        { subject: 'hello', body: 'Pick up!', isRead: true, sentAt: 1551133930595, id: 11, Category: "send" },
        { subject: 'bye!', body: 'Pick up!', isRead: false, sentAt: 1651133930596, id: 12, Category: "send" },
    ];
    return msgs;
}


window.theMsgs = gMsgs;

function query() {
    return Promise.resolve(gMsgs)
}

function remove(msgId) {
    gMsgs = gMsgs.filter(msg => msg.id !== msgId);
    storageService.saveToStorage(KEYMSG, gMsgs);
    return Promise.resolve(gMsgs);
}

function isRead(msgId) {

    const msgsCopy = [...gMsgs];
    const msgIdx = msgsCopy.findIndex(msg => msg.id === msgId);
    !msgsCopy[msgIdx].isRead ? msgsCopy[msgIdx].isRead = true : msgsCopy[msgIdx].isRead = false;
    gMsgs = msgsCopy;
    console.log(gMsgs);
    storageService.saveToStorage(KEYMSG, gMsgs);
    return Promise.resolve(gMsgs);
}