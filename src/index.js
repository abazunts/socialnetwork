import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let state = store.getState();

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));



serviceWorker.unregister();
