import React from 'react';
import ReactDOM from 'react-dom';

//import shards-react css
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
//end import shards-react css
//все фреймворки импортировать ДО своих css, чтобы твои стили корректно отрабатывали
//если подключить сначала свои стили, потом фреймворки, то если имена совпадут стилей, то фреймворки перекроют твои и всё поплывет

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
