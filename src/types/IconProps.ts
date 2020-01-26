import {Color} from "react-native-svg";

export interface IconProps {
  color: Color;
  type?: "solid" | "regular" | "light" | "duotone";
  size?: { height: number, width: number } | number;
  style?: any
}
