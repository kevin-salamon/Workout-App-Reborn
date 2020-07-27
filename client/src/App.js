import React from 'react';
import store from './store/Store';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';

function App() {

    return (
      <Provider store={store}>
        <Homepage />
      </Provider>
    );

}

export default App;
