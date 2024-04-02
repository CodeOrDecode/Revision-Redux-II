import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { todoreducer } from "./Todo/todoreducer";
import { otherreducer } from "./Others/otherreducer";

let rootreducer = combineReducers({
    todo: todoreducer,
    other: otherreducer
})

export const store = legacy_createStore(rootreducer);