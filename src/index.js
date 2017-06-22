import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <SearchPage />
, document.getElementById('root'));
registerServiceWorker();
