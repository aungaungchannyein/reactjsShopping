import {applyMiddleware, createStore} from "redux";
import reducers from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares= [thunk];

const store = createStore(
    reducers,
    {},
    applyMiddleware(...middlewares)
)
export default store;