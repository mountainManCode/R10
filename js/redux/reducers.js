import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";

// dont need to set it equal to a variable b/c it will be the only method in this file.
export default combineReducers({
  navigation: NavigationReducer
  // other reducers
});
