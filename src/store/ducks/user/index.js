import { TypesLogin } from '../login';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};

export const typesUser = {
    USER_LIST_INIT: '@chat/USER_LIST_INIT',
    USER_LIST_SUCCESS: '@chat/USER_LIST_SUCCESS',
    USER_LIST_ERROR: '@chat/USER_LIST_ERROR',
};

export const actionsUser = {
    listUser: () => ({
        type: typesUser.USER_LIST_INIT,
    }),
};

export const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesUser.USER_LIST_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: false,
            };
        case typesUser.USER_LIST_ERROR:
            return {
                data: [],
                loading: false,
                error: true,
            };
        case TypesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
