import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import { store, persistor, history } from './store';

import Login from './view/Login';
import Register from './view/Register';
import Chat from './view/Chat';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Provider>
);

export default App;
