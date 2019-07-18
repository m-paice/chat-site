import { all } from 'redux-saga/effects';
import watcherRegister from './register';
import watcherLogin from './login';
import watcherUser from './user';
import watcherSearch from './search';

function* sagas() {
    yield all([watcherRegister(), watcherLogin(), watcherUser(), watcherSearch()]);
}

export default sagas;
