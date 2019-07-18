const INITIAL_STATE = {
    status: null,
    loading: false,
    error: false,
};

export const typesRegister = {
    REGISTER_INIT: '@chat/REGISTER_INIT',
    REGISTER_SUCCESS: '@chat/REGISTER_SUCCESS',
    REGISTER_ERROR: '@chat/REGISTER_ERROR',
};

export const actionsRegister = {
    register: values => ({
        type: typesRegister.REGISTER_INIT,
        payload: { values },
    }),
};

export const register = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesRegister.REGISTER_SUCCESS:
            return {
                status: action.payload,
                loading: false,
                error: false,
            };
        case typesRegister.REGISTER_ERROR:
            return {
                status: action.payload,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
