import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';

import {App} from './App';
import {Provider} from "react-redux";

import {HashRouter} from "react-router-dom";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import {setupStore} from "./store/store";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <HashRouter>
          <App/>
      </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
