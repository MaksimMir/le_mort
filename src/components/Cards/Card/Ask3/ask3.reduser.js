import { SET_ASKVALUE } from "./ask3.action";

const initialState = null;

const askReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ASKVALUE:
            return payload;
    
        default:
            return state;
    }
}

export default askReduser;