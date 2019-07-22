import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { typesUser } from '../store/ducks/user';

function* listUser() {
    const userCorrent = yield select(state => state.login.user.id);
    try {
        const response = yield axios({
            method: 'get',
            url: 'http://localhost:3333/user',
        });

        const data = yield response.data.data.filter(v => v.id !== userCorrent);

        yield put({ type: typesUser.USER_LIST_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: typesUser.USER_LIST_ERROR });

        yield toastr.error('Opa...', String(e));
    }
}

function* watcherUser() {
    yield takeLatest(typesUser.USER_LIST_INIT, listUser);
}

export default watcherUser;
