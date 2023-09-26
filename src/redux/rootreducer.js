import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { combineReducers } from "redux";
import userReducer from "./users/userReducer";

export const rootReducer = combineReducers({
	cake: cakeReducer,
	icecream: iceCreamReducer,
	user: userReducer,
});
//export default rootReducer;
