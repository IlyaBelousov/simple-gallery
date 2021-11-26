import {applyMiddleware, combineReducers, createStore} from "redux";
import {galleryReducer} from "./gallery-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    gallery: galleryReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));