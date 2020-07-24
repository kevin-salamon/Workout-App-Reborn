import React, { Component } from 'react';
import store from './store/Store';
import { Provider } from 'react-redux';

class App extends Component {

  constructor(props) {    
    super(props);    
    this.state = { 
    };  
  }

  render() {
    return (
      <Provider store={store}>
        <h1>Test</h1>
      </Provider>
    );
  }

}

export default App;
