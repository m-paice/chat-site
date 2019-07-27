import { Reducer } from 'redux';
import { TypesLogin } from '../login';

export interface StateRegisterInterface {
    status: number;
    loading: boolean;
    error: boolean;
}

export enum TypesRegister {
    REGISTER_INIT = '@chat/REGISTER_INIT',
    REGISTER_SUCCESS = '@chat/REGISTER_SUCCESS',
    REGISTER_ERROR = '@chat/REGISTER_ERROR',
}

export interface RegisterInterface {
    type: string;
    paylaod: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    };
}

interface ActionsRegister {
    register: (firstName: string, lastName: string, email: string, password: string) => RegisterInterface;
}

const INITIAL_STATE: StateRegisterInterface = {
    status: 0,
    loading: false,
    error: false,
};

export const actionsRegister: ActionsRegister = {
    register: (firstName, lastName, email, password) => ({
        type: TypesRegister.REGISTER_INIT,
        paylaod: {
            firstName,
            lastName,
            email,
            password,
        },
    }),
};

export const register: Reducer<StateRegisterInterface> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TypesRegister.REGISTER_SUCCESS:
            return {
                status: action.payload,
                loading: false,
                error: false,
            };
        case TypesRegister.REGISTER_ERROR:
            return {
                status: action.payload,
                loading: false,
                error: true,
            };
        case TypesLogin.LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
