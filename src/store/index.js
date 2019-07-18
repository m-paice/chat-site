import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducers from './ducks';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(logger, sagaMiddleware, routerMiddleware(history)));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor, history };
