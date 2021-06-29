import * as serviceWorker from "./serviceWorker";
import React from 'react';
import { createStore, applyMiddleware, Store } from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DispatchType, PianoApp, PianoAppAction} from "./model/Piano";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store: Store<PianoApp, PianoAppAction<any>> & {
    dispatch: DispatchType<any>;
} = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.register();