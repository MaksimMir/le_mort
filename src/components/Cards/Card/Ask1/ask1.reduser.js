import { SET_VALUE } from "./ask1.action";

const initialState = null;

const daytimeReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_VALUE:
            return payload;
    
        default:
            return state;
    }
}

export default daytimeReduser;