import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { types } from 'util';
import { typesContact } from '../store/ducks/contact';

function* addContact(action) {
    const token = yield select(state => state.login.token);
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/addContact',
            headers: {
                authorization: `Bearer ${token}`,
            },
            data: {
                contact: action.payload.id,
            },
        });

        yield put({ type: typesContact.ADD_CONTACT_SUCCESS, payload: response.status });
        yield put({ type: typesContact.LIST_CONTACT_INIT });

        yield toastr.success('Muito bem', 'Usuário adicionado em sua lista');
    } catch (e) {
        yield put({ type: typesContact.ADD_CONTACT_ERROR });

        yield toastr.error('Opa...', 'Erro ao adicionar usuário');
    }
}

function* listContact() {
    const token = yield select(state => state.login.token);
    const user = yield select(state => state.login.user.id);
    try {
        const response = yield axios({
            method: 'get',
            url: `http://localhost:3333/listContacts/${user}`,
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        console.log(response)

        yield put({ type: typesContact.LIST_CONTACT_SUCCESS, payload: response.data.data });
    } catch (e) {
        yield put({ type: typesContact.LIST_CONTACT_ERROR });
    }
}

function* watcherContact() {
    yield takeLatest(typesContact.ADD_CONTACT_INIT, addContact);
    yield takeLatest(typesContact.LIST_CONTACT_INIT, listContact);
}

export default watcherContact;
