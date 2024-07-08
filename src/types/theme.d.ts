import theme from "@/styles/theme";

type Theme = typeof theme.light

declare module "theme" {
  export interface DefaultTheme extends Theme {}
}