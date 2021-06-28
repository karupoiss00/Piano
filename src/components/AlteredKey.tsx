import React from 'react'
import style from "./AlteredKey.module.css"

interface AlteredKeyProps {
    soundFileName: string;
    playKey: string;
}

function AlteredKey(props: AlteredKeyProps) {
    const audio = new Audio(`./sounds/${props.soundFileName}`);
    return (
        <button className={style.AlteredKey}
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
    AlteredKey
}
export default AlteredKey;
