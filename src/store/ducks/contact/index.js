import { typesLogin } from '../login';

const INITIAL_STATE = {
    data: [],
    status: null,
    loading: false,
    error: false,
};

export const typesContact = {
    ADD_CONTACT_INIT: '@chat/ADD_CONTACT_INIT',
    ADD_CONTACT_SUCCESS: '@chat/ADD_CONTACT_SUCCESS',
    ADD_CONTACT_ERROR: '@chat/ADD_CONTACT_ERROR',

    LIST_CONTACT_INIT: '@chat/LIST_CONTACT_INIT',
    LIST_CONTACT_SUCCESS: '@chat/LIST_CONTACT_SUCCESS',
    LIST_CONTACT_ERROR: '@chat/LIST_CONTACT_ERROR',
};

export const actionsContact = {
    addContact: id => ({
        type: typesContact.ADD_CONTACT_INIT,
        payload: { id },
    }),
    listContact: () => ({
        type: typesContact.LIST_CONTACT_INIT,
    }),
};

export const contact = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesContact.ADD_CONTACT_SUCCESS:
            return {
                data: state.data,
                status: action.payload,
                loading: false,
                error: false,
            };
        case typesContact.ADD_CONTACT_ERROR:
            return {
                data: state.data,
                status: null,
                loading: false,
                error: true,
            };
        case typesContact.LIST_CONTACT_SUCCESS:
            return {
                data: action.payload,
                status: state.state,
                loading: false,
                error: false,
            };
        case typesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
