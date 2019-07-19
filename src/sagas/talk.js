import { takeLatest, put } from 'redux-saga/effects';

import { typesTalk } from '../store/ducks/talk';

function* toggle() {
    yield put({ type: typesTalk.TALK_SUCCESS });
}

function* getTalk(action) {
    yield put({ type: typesTalk.GET_TALK_SUCCESS, payload: action.payload.values });
}

function* watcherTalk() {
    yield takeLatest(typesTalk.TALK_INIT, toggle);
    yield takeLatest(typesTalk.GET_TALK_INIT, getTalk);
}

export default watcherTalk;
