import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import AboutReducer from "./modules/about";

const rootReducer =
  // dont need to set it equal to a variable b/c it will be the only method in this file.
  combineReducers({
    navigation: NavigationReducer,
    about: AboutReducer
    // other reducers
  });

export default rootReducer;
