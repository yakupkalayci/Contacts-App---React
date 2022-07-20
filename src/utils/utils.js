export const generateID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const checkIsUnique = (contacts, newContact) => {
    const isExists = contacts.findIndex(item => item.name === newContact.name || item.phoneNumber === newContact.phoneNumber);
    return isExists;
}