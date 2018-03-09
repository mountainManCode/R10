import { StyleSheet } from "react-native";

import { colors } from "../../config/styles";
const { black, lightGrey, white, red, purple } = colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginVertical: 10,
    fontWeight: "700",
    fontSize: 25
  },
  text: {
    marginVertical: 5,
    fontSize: 18
  },
  subText: {
    marginVertical: 5,
    color: lightGrey,
    fontSize: 18
  },
  time: {
    marginVertical: 5,
    fontSize: 18,
    color: red
  },
  title: {
    color: "#9963ea",
    fontWeight: "bold",
    marginBottom: 10
  },
  speakerContainer: {
    flexDirection: "row",
    marginVertical: 5
  },
  speaker: {
    fontWeight: "bold",
    fontSize: 18
  },
  speakerImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overlayColor: white
  }
});
