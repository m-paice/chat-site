import { all } from 'redux-saga/effects';
import watcherRegister from './register';
import watcherLogin from './login';
import watcherUser from './user';
import watcherSearch from './search';
import watcherMessage from './message';
import watcherTalk from './talk';
import watcerContact from './contact';

function* sagas() {
    yield all([
        watcherRegister(),
        watcherLogin(),
        watcherUser(),
        watcherSearch(),
        watcherMessage(),
        watcherTalk(),
        watcerContact(),
    ]);
}

export default sagas;
