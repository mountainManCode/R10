import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About";
import Schedule from "../scenes/Schedule";
import NavigationLayout from "../navigation/NavigationLayout";

const Router = createRouter(() => ({
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  layout: () => NavigationLayout
}));

export default Router;
