import { createRouter } from "@expo/ex-navigation";
import AboutContainer from "../scenes/About/AboutContainer";

const Router = createRouter(() => ({
  about: () => AboutContainer
}));

export default Router;