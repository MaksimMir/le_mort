import { GET_FILMS, GET_STARSHIP } from "./user.action";

const initialState = {
    films: [],
    starships: []
};

const dataUserReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_FILMS:
            return {
                ...state,
                films: [...state.films, payload]
            }
        case GET_STARSHIP:
            return {
                ...state,
                starships: [...state.starships, payload]
            }    
        default:
            return state;
    }
}

export default dataUserReduser;