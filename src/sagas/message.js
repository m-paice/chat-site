import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import socket from 'socket.io-client';

import { typesMessage } from '../store/ducks/message';
import { store } from '../store';

export const io = socket('http://localhost:3333');

io.on('sendMessage', message => {
    put({ type: typesMessage.LIST_MESSAGE_INIT });
});

function* listMessage() {
    const token = yield select(state => state.login.token);
    const contact = yield select(state => state.talk.data.id);
    try {
        const response = yield axios({
            method: 'get',
            url: `http://localhost:3333/talk/${contact}`,
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        yield put({ type: typesMessage.LIST_MESSAGE_SUCCESS, payload: response.data.data });
    } catch (e) {
        yield put({ type: typesMessage.LIST_MESSAGE_ERROR, payload: e });
    }
}

function* sendMessage(action) {
    const token = yield select(state => state.login.token);
    const contact = yield select(state => state.talk.data.id);
    try {
        yield axios({
            method: 'post',
            url: 'http://localhost:3333/talk',
            headers: {
                authorization: `Bearer ${token}`,
            },
            data: {
                contact,
                message: action.payload.values.message,
            },
        });
        yield listMessage();
    } catch (e) {
        yield put({ type: typesMessage.MESSAGE_ERROR, payload: e });
    }
}

function* openMessage(action) {
    yield put({ type: typesMessage.OPEN_MESSAGE_SUCCESS, payload: action.payload.id });
    yield listMessage();
}

function* watcherMessage() {
    yield takeLatest(typesMessage.MESSAGE_INIT, sendMessage);
    yield takeLatest(typesMessage.LIST_MESSAGE_INIT, listMessage);
    yield takeLatest(typesMessage.OPEN_MESSAGE_INIT, openMessage);
}

export default watcherMessage;
