import * as serviceWorker from "./serviceWorker";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Piano} from "./model/Piano";


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

document.body.addEventListener("keypress",
    (e) =>
    {
        const pianoKey = Piano.keys.find(key => key.keyBind.toLowerCase() === e.key);
        if (pianoKey)
        {
            const audio = new Audio(`./sounds/${pianoKey.sampleName}`);
            audio.play();
        }
    }
);

serviceWorker.register();