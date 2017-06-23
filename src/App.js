import React, { Component } from 'react';

import Router from './components/Router';

import './App.css';


class App extends Component {
  render() {
    console.log(Router)
    return (
      <div>
        {Router}
      </div>
    );
  }
}

export default App;
