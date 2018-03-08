import { StyleSheet } from "react-native";

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
  heroBanner: {
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: row,
    padding: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6"
  },
  header: {
    marginVertical: 10,
    fontWeight: "700",
    fontSize: 20
  },
  text: {
    marginVertical: 5
  },
  titleContainer: {
    flexDirection: "row"
  },
  title: {
    color: "#9963ea",
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 7.5
  }
});
