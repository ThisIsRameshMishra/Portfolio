import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
 <BrowserRouter>
    <App />
    </BrowserRouter>
    </>
,
  document.getElementById('root')
);


