import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './modules/root/store/store';
import {BrowserRouter} from "react-router-dom";
import Routing from './modules/root/store/routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode> /* Disabling strict mode as it's causing effects to double fire */
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
