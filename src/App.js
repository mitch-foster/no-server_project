import React, { Component } from 'react';

import Router from './components/Router';

import './App.css';


class App extends Component {
  render() {
    return (
      <div id ='main'>
        {Router}
      </div>
    );
  }
}

export default App;
