import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { typesUser } from '../store/ducks/user';

function* listUser() {
    try {
        const response = yield axios({
            method: 'get',
            url: 'http://localhost:3333/user',
        });
        yield put({ type: typesUser.USER_LIST_SUCCESS, payload: response.data.data });
    } catch (e) {
        yield put({ type: typesUser.USER_LIST_ERROR });

        yield toastr.error('Opa...', String(e));
    }
}

function* watcherUser() {
    yield takeLatest(typesUser.USER_LIST_INIT, listUser);
}

export default watcherUser;
