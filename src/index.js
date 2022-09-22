import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-red-hat-display';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
require('typeface-red-hat-display');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < React.StrictMode >
    <Router>git
    <App / >
    </Router>
    
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals