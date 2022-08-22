import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);

reportWebVitals();
