import * as actionTypes from "./actionTypes";
import {PianoApp, PianoAppAction, setCurrentPressedKey} from "../model/Piano";


const initialState: PianoApp = {
    currentPressedKey: "None"
};


const reducer = (state: PianoApp = initialState, action: PianoAppAction<any>): PianoApp => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PRESSED_KEY:
            return setCurrentPressedKey(state, action.payload);
    }
    return state;
};

export default reducer;