import React from "react";
import { Text as Span, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    color: "#333"
  }
});

const fontMapping = {
  "black": "Rubik-Black",
  "bold": "Rubik-Bold",
  "light": "Rubik-Light",
  "medium": "Rubik-Medium",
  "regular": "Rubik-Regular",
};

function Text ({ type, children, style, ...props}: any) {
  const fontFamily = fontMapping[type] || "Rubik-Regular";

  return (
    <Span {...props} style={[{ fontFamily }, styles.default, style || {}]} >{children}</Span>
  );
}

export default Text


