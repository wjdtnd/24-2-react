import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ch03/Book.css';
import './ch04/BTN.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./ch03/Library";
import ConfirmDialog from "./ch04/ConfirmDialog";
import BackDialog from "./ch04/BackDialog";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmDialog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals---
reportWebVitals();
