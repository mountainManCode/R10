import { StyleSheet } from "react-native";

import { colors } from "../../config/styles";
const { mediumGrey, lightGrey, white, red, purple } = colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    marginVertical: 7.5,
    color: mediumGrey,
    fontSize: 18
  },
  title: {
    color: purple,
    fontWeight: "bold",
    marginBottom: 10
  },
  time: {
    marginVertical: 5,
    fontSize: 18,
    color: red
  },
  speakerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  speaker: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15
  },
  speakerImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overlayColor: white,
    flexDirection: "row"
  },
  buttonContainer: {
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: lightGrey,
    paddingVertical: 15
  },
  wrapper: {
    flexDirection: "column"
  },
  locationHeartWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
