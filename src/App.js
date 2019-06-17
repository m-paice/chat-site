import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Store';

import User from './views/User';

class App extends Component {
    componentDidMount() {}

    render() {
        return (
          <Provider store={store}>
            <User />
          </Provider>
        );
    }
}

export default App;
