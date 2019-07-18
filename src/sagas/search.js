import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { typesSearch } from '../store/ducks/search';

function* search({ payload }) {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://localhost:3333/addContact',
            data: {
                user: 15,
                contact: payload.values.search,
            },
        });
        yield put({ type: typesSearch.SEARCH_SUCCESS, payload: response.data.data });
    } catch (e) {
        yield put({ type: typesSearch.SEARCH_ERROR, payload: String(e) });

        toastr.error('Opa...', 'User not found');
    }
}

function* watcherSearch() {
    yield takeLatest(typesSearch.SEARCH_INIT, search);
}

export default watcherSearch;
