import Theme from "@/styles/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: Theme.fonts.sizes.baseAlternative,
    fontFamily: Theme.fonts.fontFamily.semibold,
  },
});

export default styles;
