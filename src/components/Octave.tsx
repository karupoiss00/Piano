import React from 'react'
import style from "./Octave.module.css"
import Key from "./Key";
import {Piano} from "../model/Piano";


function Octave() {
    return (
        <div className={style.Octave}>
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
