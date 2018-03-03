import { createRouter } from "@expo/ex-navigation";

import NavigationLayout from "./Nav";
import FavesContainer from "../scenes/Faves/";
import AboutContainer from "../scenes/About/";
import ScheduleContainer from "../scenes/Schedule/";
import SessionContainer from "../scenes/Session/";
import SpeakerContainer from "../scenes/Speaker/";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  faves: () => FavesContainer,
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  session: () => SessionContainer,
  speaker: () => SpeakerContainer
}));

export default Router;
