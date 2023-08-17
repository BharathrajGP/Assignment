import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, } from 'react-router-dom';
import './index.css';
import App from './App';
import { ToastNotification } from './components/Shared';
import "react-tooltip/dist/react-tooltip.css";
// import "bootstrap/dist/css/bootstrap.min.css";


const { UserProvider } = require('./context')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <App />
    <ToastNotification />
  </Router>
);

