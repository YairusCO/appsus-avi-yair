import { storageService } from "../../../services/storage-service.js"

const KEYMSG = 'msg';
var gMsgs;
_createMsgs();

export const mailService = {
    query,
    remove,
    isRead,
    getById
}

function _createMsgs() {
    gMsgs = storageService.loadFromStorage(KEYMSG);
    if (!gMsgs || !gMsgs.length) {
        gMsgs = _getDemoMsgs()
        storageService.saveToStorage(KEYMSG, gMsgs);
    }
}

//localStorage.clear();

function getById(id) {
    var msgId = gmsgs.find(msg => msg.id === id)
    return Promise.resolve(msgId)
}

function _getDemoMsgs() {
    var msgs = [
        { subject: 'Duis aute irure dolor', body: 'Ut enim ad minim veniam.... ', isRead: false, sentAt: 1451133930594, id: 1, category: "inbox" },
        { subject: 'Duis aute irure dolor?', body: 'Ut enim ad minim veniam.... ', isRead: true, sentAt: 1551133930595, id: 2, category: "inbox" },
        { subject: 'Duis aute irure dolor!', body: 'Ut enim ad minim veniam.... ', isRead: false, sentAt: 1651133930596, id: 3, category: "inbox" },
        { subject: 'Duis aute irure dolor?', body: 'Ut enim ad minim veniam.... ', isRead: false, sentAt: 1451133930594, id: 4, category: "inbox" },
        { subject: 'Duis aute irure dolor', body: 'Ut enim ad minim veniam.... ', isRead: true, sentAt: 1551133930595, id: 5, category: "inbox" },
        { subject: 'Duis aute irure dolor!', body: 'Ut enim ad minim veniam....', isRead: false, sentAt: 1651133930596, id: 6, category: "inbox" },
        { subject: 'Duis aute irure dolor 9090?', body: 'Ut enim ad minim veniam....', isRead: false, sentAt: 1451133930594, id: 7, category: "sent" },
        { subject: 'Duis aute irure dolor 6767', body: 'Ut enim ad minim veniam....', isRead: true, sentAt: 1551133930595, id: 8, category: "sent" },
        { subject: 'bye!', body: 'Ut enim ad minim veniam....', isRead: false, sentAt: 1651133930596, id: 9, category: "sent" },
        { subject: 'Duis aute irure from sent?', body: 'Ut enim ad minim veniam....', isRead: false, sentAt: 1451133930594, id: 10, category: "sent" },
        { subject: 'Duis aute irure dolor set', body: 'Ut enim ad minim veniam....', isRead: true, sentAt: 1551133930595, id: 11, category: "sent" },
        { subject: 'Duis aute irure dolor! 378378', body: 'Ut enim ad minim veniam....', isRead: false, sentAt: 1651133930596, id: 12, category: "sent" },
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
    `
    const msgsCopy = [...gMsgs];`
    const msgIdx = msgsCopy.findIndex(msg => msg.id === msgId);
    !msgsCopy[msgIdx].isRead ? msgsCopy[msgIdx].isRead = true : msgsCopy[msgIdx].isRead = false;
    gMsgs = msgsCopy;
    console.log(gMsgs);
    storageService.saveToStorage(KEYMSG, gMsgs);
    return Promise.resolve(gMsgs);
}