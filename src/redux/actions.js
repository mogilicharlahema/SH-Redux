
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const editContact = (index, contact) => ({
    type: EDIT_CONTACT,
    payload: { index, contact },
});

export const deleteContact = (index) => ({
    type: DELETE_CONTACT,
    payload: index,
});
