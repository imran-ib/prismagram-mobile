import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export const theme = {
  blackColor: "#262626",
  greyColor: "#FAFAFA",
  darkGreyColor: "#999",
  lightGreyColor: "rgb(230, 230, 230)",
  redColor: "#ED4956",
  blueColor: "#3897f0",
  darkBlueColor: "#003569",
};
