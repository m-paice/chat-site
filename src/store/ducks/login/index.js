const INITIAL_STATE = {
    token: '',
    user: {},
    loading: false,
    error: false,
};

export const typesLogin = {
    LOGIN_INIT: '@chat/LOGIN_INIT',
    LOGIN_SUCCESS: '@chat/LOGIN_SUCCESS',
    LOGIN_ERROR: '@chat/LOGIN_ERROR',

    LOGOUT_INIT: '@chat/LOGOUT_INIT',
    LOGOUT_SUCCESS: '@chat/LOGOUT_SUCCESS',
    LOGOUT_ERROR: '@chat/LOGOUT_ERROR',
};

export const actionsLogin = {
    login: values => ({
        type: typesLogin.LOGIN_INIT,
        payload: {
            values,
        },
    }),
    logout: () => ({
        type: typesLogin.LOGOUT_INIT,
    }),
};

export const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesLogin.LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                user: action.payload.data,
                loading: false,
                error: false,
            };
        case typesLogin.LOGIN_ERROR:
            return {
                token: '',
                data: {},
                loading: false,
                error: true,
            };
        case typesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
