import { storageService } from "../../../services/storage-service.js"

const KEYMSG = 'msg';
var gMsgs;
_createMsgs();

function _createMsgs() {
    gMsgs = storageService.loadFromStorage(KEYMSG);
    if (!gMsgs || !gMsgs.length) {
        gMsgs = _getDemoMsgs()
        storageService.saveToStorage(KEYMSG, gMsgs);
    }
}

function _getDemoMsgs() {
    var msgs = [
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1451133930594, id: 1 },
        { subject: 'hello', body: 'Pick up!', isRead: true, sentAt: 1551133930595, id: 2 },
        { subject: 'bye!', body: 'Pick up!', isRead: false, sentAt: 1651133930596, id: 3 },
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

export const mailService = {
    query,
    remove
}