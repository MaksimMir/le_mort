import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import daytimeReduser from "./components/Cards/Card/Ask1/ask1.reduser";
import dateReduser from "./components/Cards/Card/Ask2/ask2.reduser";
import askReduser from "./components/Cards/Card/Ask3/ask3.reduser";
import dataUserReduser from "./components/UserData/user.reduser";

const reduser = combineReducers({
    daytime: daytimeReduser,
    date: dateReduser,
    askvalue: askReduser,
    dataUser: dataUserReduser,
})

export const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));