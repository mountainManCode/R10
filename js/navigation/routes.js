import { createRouter } from "@expo/ex-navigation";

import NavigationLayout from "../navigation/NavigationLayout";
import FavesContainer from "../scenes/Faves/";
import AboutContainer from "../scenes/About";
import ScheduleContainer from "../scenes/Schedule";
import SessionContainer from "../scenes/Session";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  faves: () => FavesContainer,
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  session: () => SessionContainer
}));

export default Router;
