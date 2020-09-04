import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';
import {I18nextProvider} from 'react-i18next';
import './translation/i18n';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


const loggerMiddleware = createLogger();
export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <Provider store={store}>
                <App/>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
