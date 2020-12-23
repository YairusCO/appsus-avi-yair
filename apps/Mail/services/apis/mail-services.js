import { inbox } from '../data/mail-data.js'

export const getInbox = () => {
    return (
        Promise.resolve(inbox)
    );
};