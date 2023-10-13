import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  headerTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 17,
  },
  plusIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});

export const { header, headerTitle, plusIcon } = styles;
