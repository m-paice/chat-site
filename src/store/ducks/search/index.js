import { typesLogin } from '../login';

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: false,
    messageError: '',
};

export const typesSearch = {
    SEARCH_INIT: '@chat/SEARCH_INIT',
    SEARCH_SUCCESS: '@chat/SEARCH_SUCCESS',
    SEARCH_ERROR: '@chat/SEARCH_ERROR',
};

export const actionsSearch = {
    search: values => ({
        type: typesSearch.SEARCH_INIT,
        payload: {
            values,
        },
    }),
};

export const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesSearch.SEARCH_SUCCESS:
            return {
                data: { ...action.payload },
                loading: false,
                error: false,
                messageError: '',
            };
        case typesSearch.SEARCH_ERROR:
            return {
                data: {},
                loading: false,
                error: true,
                messageError: action.payload,
            };
        case typesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
