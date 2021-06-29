import * as actionTypes from "./actionTypes"
import {DispatchType, Keys, PianoAppAction} from "../model/Piano";

export function setCurrentPressedKey(key: Keys | "None") {
    const action: PianoAppAction<Keys | "None">= {
        type: actionTypes.SET_CURRENT_PRESSED_KEY,
        payload: key,
    }
    return (dispatch: DispatchType<Keys | "None">) => {
        dispatch(action)
    }
}