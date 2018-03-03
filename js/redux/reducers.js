import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import AboutReducer from "./modules/about";
import SessionReducer from "./modules/session";
import SpeakerReducer from "./modules/speaker";
import FavesReducer from "./modules//faves";

const rootReducer =
  // dont need to set it equal to a variable b/c it will be the only method in this file.
  combineReducers({
    navigation: NavigationReducer,
    session: SessionReducer,
    about: AboutReducer,
    speaker: SpeakerReducer,
    faves: FavesReducer
  });

export default rootReducer;
