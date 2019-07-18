import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { typesLogin } from '../store/ducks/login';
import { history } from '../store';

function* login(action) {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/login',
            data: action.payload.values,
        });
        yield put({ type: typesLogin.LOGIN_SUCCESS, payload: response.data.token });

        yield toastr.success('Muito bem', 'Login efetuado com sucesse!', {
            onHideComplete: () => history.push('/chat'),
        });
    } catch (e) {
        yield put({ type: typesLogin.LOGIN_ERROR, payload: e });
        yield toastr.error('Opa...', String(e));
    }
}

function* watcherLogin() {
    yield takeLatest(typesLogin.LOGIN_INIT, login);
}

export default watcherLogin;
