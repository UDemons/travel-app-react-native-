import React from "react";
import Svg, { Path } from "react-native-svg";
import {IconProps} from "../types/IconProps";


const Bookmark = ({ color, type, size }: IconProps) => (
  <Svg height={(size as any)?.height || size || 12} width={(size as any)?.width || size || 12} viewBox="0 0 384 512" color={color}>
    {type === "solid" && (
      <Path fill={color} d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
    )}
    {(!type || type === "regular") && (
      <Path
        fill={color}
        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
      />
    )}
    {type === "duotone" && (
      <>
        <Path
          fill={color}
          opacity={0.4}
          d="M384 48v464L192 400 0 512V48A48 48 0 0 1 48 0h32v326.11a16 16 0 0 0 23.16 14.31L192 296l88.84 44.42A16 16 0 0 0 304 326.11V0h32a48 48 0 0 1 48 48z"
        />
        <Path fill={color} d="M304 0v326.11a16 16 0 0 1-23.16 14.31L192 296l-88.84 44.42A16 16 0 0 1 80 326.11V0z" />
      </>
    )}
  </Svg>
);

export default Bookmark;
