import React, {Dispatch, useCallback} from 'react'
import style from "./App.module.css"
import Octave from "./components/Octave";
import {useDispatch} from "react-redux";
import {Key, Keys, Piano} from "./model/Piano";
import {setCurrentPressedKey} from "./store/actionsCreators";

function App() {
    const dispatch: Dispatch<any> = useDispatch();

    const setNewPressedKey = useCallback(
        (key: Keys | "None") => {
            dispatch(setCurrentPressedKey(key));
        },
        [dispatch]
    );

    return (
        <div className={style.App}
             onKeyPress={
                (e) =>
                {
                    const pianoButton: Key | undefined = Piano.keys.find(key => key.keyBind.toLowerCase() === e.key);
                    if (pianoButton)
                    {
                        const audio = new Audio(`./sounds/${pianoButton.sampleName}`);
                        setNewPressedKey(pianoButton.keyName);
                        audio.play();
                        setTimeout(() => {
                            setNewPressedKey("None");
                        }, 2500)
                    }
                }
            }
        >
            <Octave/>
        </div>
    );
}

export type {
    App
}
export default App;
