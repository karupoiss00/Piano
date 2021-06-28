import React from 'react'
import style from "./App.module.css"
import Octave from "./components/Octave";

function App() {
    return (
        <div className={style.App}>
            <Octave/>
        </div>
    );
}

export type {
    App
}
export default App;
