import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";
import { typography } from "../../config/styles";

const { white, blue } = colors;
const fontMain = typography.fontMain;
const fontMainLight = typography.fontMainLight;

export const styles = StyleSheet.create({
  blackContainer: {
    backgroundColor: "black"
  },
  container: {
    backgroundColor: "white",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 40,
    borderRadius: 5
  },
  speaker: {
    flexDirection: "row",
    left: 15,
    paddingTop: 15,
    paddingBottom: 25
  },
  aboutSpeakerContainer: {
    alignSelf: "center",
    left: 55
  },
  aboutSpeakerText: {
    color: "white",
    fontSize: 18,
    fontFamily: fontMain
  },
  image: {
    borderRadius: 60,
    height: 125,
    width: 125,
    marginBottom: 15
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15
  },
  name: {
    fontFamily: fontMain,
    fontSize: 25,
    justifyContent: "center"
  },
  description: {
    marginTop: 20,
    fontFamily: fontMainLight,
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: blue
  },
  buttonText: {
    color: white,
    fontFamily: fontMain,
    fontSize: 13,
    textAlign: "center"
  }
});
