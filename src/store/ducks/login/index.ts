import { Reducer } from 'redux';

const INITIAL_STATE: StateLoginInterface = {
    token: '',
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
    },
    loading: false,
    error: false,
};

export interface StateLoginInterface {
    token: string;
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    };
    loading: boolean;
    error: boolean;
}

export enum TypesLogin {
    LOGIN_INIT = '@chat/LOGIN_INIT',
    LOGIN_SUCCESS = '@chat/LOGIN_SUCCESS',
    LOGIN_ERROR = '@chat/LOGIN_ERROR',

    LOGOUT_INIT = '@chat/LOGOUT_INIT',
    LOGOUT_SUCCESS = '@chat/LOGOUT_SUCCESS',
    LOGOUT_ERROR = '@chat/LOGOUT_ERROR',
}

interface ValuesLogin {
    email: string;
    password: string;
}

export interface LoginInterface {
    type: string;
    payload: {
        values: ValuesLogin;
    };
}

interface LogoutInterface {
    type: string;
}

interface ActionsLogin {
    login: (values: ValuesLogin) => LoginInterface;
    logout: () => LogoutInterface;
}

export const actionsLogin: ActionsLogin = {
    login: values => ({
        type: TypesLogin.LOGIN_INIT,
        payload: {
            values,
        },
    }),
    logout: () => ({
        type: TypesLogin.LOGOUT_INIT,
    }),
};

export const login: Reducer<StateLoginInterface> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TypesLogin.LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                user: action.payload.data,
                loading: false,
                error: false,
            };
        case TypesLogin.LOGIN_ERROR:
            return {
                token: '',
                user: {
                    id: 0,
                    firstName: '',
                    lastName: '',
                    email: '',
                },
                loading: false,
                error: true,
            };
        case TypesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
