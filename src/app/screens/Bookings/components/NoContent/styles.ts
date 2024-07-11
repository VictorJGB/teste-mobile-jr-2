import Theme from "@/styles/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  noContentText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  noContentTitle: {
    fontFamily: Theme.fonts.fontFamily.bold,
    fontSize: Theme.fonts.sizes["heading-2"],
    color: Theme.colors.black,
  },
  noContentParagraph: {
    fontFamily: Theme.fonts.fontFamily.medium,
    fontSize: Theme.fonts.sizes.base,
    color: "#535763",
    textAlign: "center",
  },
  allServicesButton: {
    maxWidth: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 12,
    paddingHorizontal: 22,

    borderRadius: 8,

    backgroundColor: Theme.colors.primary.background,

    fontFamily: Theme.fonts.fontFamily.bold,
    fontSize: Theme.fonts.sizes.baseAlternative,
    color: Theme.colors.background,
  },
});

export default styles;
