import React from 'react'
import style from "./Octave.module.css"
import ClearedKey from "./ClearedKey";
import AlteredKey from "./AlteredKey";
import {Piano} from "../model/Piano";


function Octave() {
    return (
        <div className={style.Octave}>
            <div className={style.blockOfClearedKeys}>
                {
                    Piano.keys.filter(key => key.keyType === "CLEARED").map(
                        (key) =>
                        {
                            return (<ClearedKey playKey={key.keyBind} soundFileName={key.sampleName}/>);
                        }
                    )
                }
            </div>
            <div className={style.blockOfAlteredKeys}>
                <div className={style.firstPartOfAlteredKeys}>
                    {
                        Piano.keys.filter((key) => key.keyType === "ALTERED").map(
                            (key, i) => {
                                if (i < 2)
                                {
                                    return (<AlteredKey playKey={key.keyBind} soundFileName={key.sampleName}/>);
                                }
                            }
                        )
                    }

                </div>
                <div className={style.secondPartOfAlteredKeys}>
                    {
                        Piano.keys.filter((key) => key.keyType === "ALTERED").map((key, i) => {
                            if (i > 1)
                            {
                                return (<AlteredKey playKey={key.keyBind} soundFileName={key.sampleName}/>);
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export type {
    Octave
}
export default Octave;
