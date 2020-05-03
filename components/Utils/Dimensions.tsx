import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export { windowWidth, windowHeight, window, screen };
