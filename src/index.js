import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';
import ResultsPage from './components/ResultsPage/ResultsPage';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <div>
        <LandingPage />
        <SearchPage />
        <ResultsPage />
    </div>
, document.getElementById('root'));
registerServiceWorker();
