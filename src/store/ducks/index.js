import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { login } from './login';
import { register } from './register';
import { user } from './user';
import { search } from './search';

export const history = createBrowserHistory();

const rootReucers = combineReducers({
    login,
    register,
    user,
    search,
    form: formReducer,
    toastr: toastrReducer,
    router: connectRouter(history),
});

export default rootReucers;
