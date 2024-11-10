
import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from './actions';

const initialState = {
    contacts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case EDIT_CONTACT:
            const updatedContacts = [...state.contacts];
            updatedContacts[action.payload.index] = action.payload.contact;
            return {
                ...state,
                contacts: updatedContacts,
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;
