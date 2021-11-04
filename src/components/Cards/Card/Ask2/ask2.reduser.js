import { SET_DATE } from "./ask2.action";

const initialState = {};

const dateReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATE:
            return payload;
    
        default:
            return state;
    }
}

export default dateReduser;