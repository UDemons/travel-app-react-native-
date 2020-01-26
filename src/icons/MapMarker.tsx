import React from "react";
import Svg, { Path } from "react-native-svg";
import {IconProps} from "../types/IconProps";

const MapMarker = ({ color, type, size }: IconProps) => (
  <Svg height={(size as any)?.height || size || 12} width={(size as any)?.width || size || 12} viewBox="0 0 384 512" color={color}>
    {type === "solid" && (
      <Path
        fill={color}
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    )}
    {(!type || type === "regular") && (
      <Path
        fill={color}
        d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
      />
    )}
  </Svg>
);

export default MapMarker;
