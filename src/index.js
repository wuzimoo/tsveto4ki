import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
