import Theme from "@/styles/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 8,
    gap: 12,

    backgroundColor: Theme.colors.background,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  categoryImage: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: "#FFBC99",
    borderRadius: 50,
    width: 50,
    height: 50,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: Theme.fonts.sizes.lg,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.black,
  },
  headerSubtitle: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: "#6F767E",
  },
  divider: {
    height: 1,
    width: "100%",
    borderRadius: 1,
    backgroundColor: "#EFEFEF",
  },
  cardBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  bodyHeader: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
