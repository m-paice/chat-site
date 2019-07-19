const INITIAL_STATE = {
    talk: false,
    data: {}
};

export const typesTalk = {
    TALK_INIT: '@chat/TALK_INIT',
    TALK_SUCCESS: '@chat/TALK_SUCCESS',

    GET_TALK_INIT: '@chat/GET_TALK_INIT',
    GET_TALK_SUCCESS: '@chat/GET_TALK_SUCCESS',
};

export const actionsTalk = {
    toggle: () => ({
        type: typesTalk.TALK_INIT,
    }),
    getTalk: values => ({
        type: typesTalk.GET_TALK_INIT,
        payload: { values }
    })
};

export const talk = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case typesTalk.TALK_SUCCESS:
          return {
            talk: true
          }
          case typesTalk.GET_TALK_SUCCESS: 
          return {
              talk: state.talk,
              data: action.payload
          }
        default:
            return state;
    }
};
