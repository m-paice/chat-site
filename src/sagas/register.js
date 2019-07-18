import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { typesRegister } from '../store/ducks/register';
import { history } from '../store';

function* register(action) {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/user',
            data: action.payload.values,
        });
        yield put({ type: typesRegister.REGISTER_SUCCESS, payload: response.status });

        yield toastr.success('Muito bem', 'Cadastro efetuado com sucesse!', {
            onHideComplete: () => history.push('/'),
        });
    } catch (e) {
        yield put({ type: typesRegister.REGISTER_ERROR, payload: e });

        yield toastr.error('Opa...', String(e));
    }
}

function* watcherRegister() {
    yield takeLatest(typesRegister.REGISTER_INIT, register);
}

export default watcherRegister;
