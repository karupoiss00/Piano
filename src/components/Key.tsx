import React from 'react'
import clearedKeyStyle from "./ClearedKey.module.css"
import alteredKeyStyle from "./AlteredKey.module.css"

interface KeyProps {
    soundFileName: string;
    playKey: string;
    keyType: "CLEARED" | "ALTERED";
    keyName: string;
}
const styleNamesForAlteredKeys: Array<{keyName: string, className: string}> = [
    {keyName: "CSharp", className: alteredKeyStyle.CSharp},
    {keyName: "DSharp", className: alteredKeyStyle.DSharp},
    {keyName: "FSharp", className: alteredKeyStyle.FSharp},
    {keyName: "GSharp", className: alteredKeyStyle.GSharp},
    {keyName: "ASharp", className: alteredKeyStyle.ASharp}
]

function Key(props: KeyProps) {
    const audio = new Audio(`./sounds/${props.soundFileName}`);
    return (
        <button className=
                {
                    props.keyType === "CLEARED" ? clearedKeyStyle.ClearedKey : alteredKeyStyle.AlteredKey
                    + ' ' + (props.keyType === "ALTERED" ? styleNamesForAlteredKeys.filter(key => key.keyName === props.keyName)[0].className : '')
                }
                onClick=
                {
                    () => {
                        audio.play();
                    }
                }
        >
            {props.playKey}
        </button>
    );
}

export type {
    Key
}
export default Key;
