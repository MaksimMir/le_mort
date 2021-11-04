export const SET_ASKVALUE = 'SET_ASKVALUE';

export const setAskValue = value => {
    return {
        type: SET_ASKVALUE,
        payload: value
    }
}