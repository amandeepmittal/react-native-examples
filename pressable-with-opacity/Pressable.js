import React, { useCallback } from "react";
import { Pressable as RNPressable } from "react-native";

function Pressable({ children, style, ...otherProps }) {
  const _style = useCallback(() => [style && style], [style]);

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
}

export default Pressable;
