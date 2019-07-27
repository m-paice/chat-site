import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { TypesRegister, RegisterInterface } from '../store/ducks/register';
import { history } from '../store';

function* register(action: RegisterInterface) {
    yield console.log(action);
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/user',
            data: {
                firstName: action.paylaod.firstName,
                lastName: action.paylaod.lastName,
                email: action.paylaod.email,
                password: action.paylaod.password,
            },
        });
        yield put({ type: TypesRegister.REGISTER_SUCCESS, payload: response.status });

        yield toastr.success('Muito bem', 'Cadastro efetuado com sucesse!', {
            onHideComplete: () => history.push('/'),
        });
    } catch (e) {
        yield put({ type: TypesRegister.REGISTER_ERROR, payload: e });

        yield toastr.error('Opa...', String(e));
    }
}

function* watcherRegister() {
    yield takeLatest(TypesRegister.REGISTER_INIT, register);
}

export default watcherRegister;
