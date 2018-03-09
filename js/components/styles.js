import { StyleSheet } from "react-native";

import { colors } from "../config/styles";
const { black, lightGrey, mediumGrey, red, purple } = colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: lightGrey,
    fontWeight: "bold"
  },
  subText: {
    color: mediumGrey,
    fontSize: 18
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingTop: 5
  },
  locationHeartWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: lightGrey,
    borderBottomWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
