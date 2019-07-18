const INITIAL_STATE = {
    token: '',
    loading: false,
    error: false,
};

export const typesLogin = {
    LOGIN_INIT: '@chat/LOGIN_INIT',
    LOGIN_SUCCESS: '@chat/LOGIN_SUCCESS',
    LOGIN_ERROR: '@chat/LOGIN_ERROR',
};

export const actionsLogin = {
    login: values => ({
        type: typesLogin.LOGIN_INIT,
        payload: {
            values,
        },
    }),
};

export const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesLogin.LOGIN_SUCCESS:
            return {
                token: action.payload,
                loading: false,
                error: false,
            };
        case typesLogin.LOGIN_ERROR:
            return {
                token: '',
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
