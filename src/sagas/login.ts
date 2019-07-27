import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { TypesLogin, LoginInterface } from '../store/ducks/login';
import { history } from '../store';

function* login(action: LoginInterface) {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/login',
            data: action.payload.values,
        });
        yield put({ type: TypesLogin.LOGIN_SUCCESS, payload: response.data });

        yield toastr.success('Muito bem', 'Login efetuado com sucesse!', {
            onHideComplete: () => history.push('/home'),
        });
    } catch (e) {
        yield put({ type: TypesLogin.LOGIN_ERROR, payload: e });
        yield toastr.error('Opa...', 'Dados inválidos');
    }
}

function* logout() {
    yield put({ type: TypesLogin.LOGOUT_SUCCESS });
}

function* watcherLogin() {
    yield takeLatest(TypesLogin.LOGIN_INIT, login);
    yield takeLatest(TypesLogin.LOGOUT_INIT, logout);
}

export default watcherLogin;
