import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootreducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
//const store = createStore(cakeReducer);
import thunk from "redux-thunk";
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
