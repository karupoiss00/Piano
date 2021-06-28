import React from 'react'
import style from "./ClearedKey.module.css"

interface ClearedKeyProps {
    soundFileName: string;
    playKey: string;
}

function ClearedKey(props: ClearedKeyProps) {
    const audio = new Audio(`./sounds/${props.soundFileName}`);
    return (
        <button className={style.ClearedKey}
                onClick={
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
    ClearedKey
}
export default ClearedKey;
