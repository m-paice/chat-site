const INITIAL_STATE = {
    data: [],
    talk: null,
    loading: false,
    error: false,
};

export const typesMessage = {
    MESSAGE_INIT: '@chat/MESSAGE_INIT',
    MESSAGE_SUCCESS: '@chat/MESSAGE_SUCCESS',
    MESSAGE_ERROR: '@chat/MESSAGE_ERROR',

    LIST_MESSAGE_INIT: '@chat/LIST_MESSAGE_INIT',
    LIST_MESSAGE_SUCCESS: '@chat/LIST_MESSAGE_SUCCESS',
    LIST_MESSAGE_ERROR: '@chat/LIST_MESSAGE_ERROR',

    OPEN_MESSAGE_INIT: '@chat/OPEN_MESSAGE_INIT',
    OPEN_MESSAGE_SUCCESS: '@chat/OPEN_MESSAGE_SUCCESS',
    OPEN_MESSAGE_ERROR: '@chat/OPEN_MESSAGE_ERROR',
};

export const actionsMessage = {
    message: values => ({
        type: typesMessage.MESSAGE_INIT,
        payload: { values },
    }),
    listMessage: () => ({
        type: typesMessage.LIST_MESSAGE_INIT,
    }),
    openMessage: id => ({
        type: typesMessage.OPEN_MESSAGE_INIT,
        payload: { id },
    }),
};

export const message = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesMessage.MESSAGE_SUCCESS:
            return {
                data: [...state.data, action.payload],
                talk: state.talk,
                loading: false,
                error: false,
            };
        case typesMessage.MESSAGE_ERROR:
            return {
                data: [],
                talk: {},
                loading: false,
                error: true,
            };
        case typesMessage.LIST_MESSAGE_SUCCESS:
            return {
                data: action.payload,
                talk: state.talk,
                loading: false,
                error: false,
            };
        case typesMessage.OPEN_MESSAGE_SUCCESS:
            return {
                data: state.data,
                talk: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
};
