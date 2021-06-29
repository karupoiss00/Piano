import React, {useEffect, useRef} from 'react'
import style from "./Octave.module.css"
import Key from "./Key";
import {Keys, Piano, PianoApp} from "../model/Piano";
import {shallowEqual, useSelector} from "react-redux";


function Octave()
{
    const pressedKey: Keys | "None" = useSelector(
        (state: PianoApp) =>  state.currentPressedKey,
        shallowEqual
    );

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current)
        {
            ref.current.focus();
        }
    },[]);

    return (
        <div className={style.Octave}
             ref={ref}
             tabIndex={0}
        >
            {
                Piano.keys.map(
                    (key) =>
                    {
                        return (
                            <Key
                                keyName={key.keyName}
                                playKey={key.keyBind}
                                soundFileName={key.sampleName}
                                keyType={key.keyType}
                                pressed={key.keyName === pressedKey}
                                key={key.keyName}
                            />
                        );
                    }
                )
            }
        </div>
    );
}

export type {
    Octave
}
export default Octave;
