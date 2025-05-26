import { useCallback } from "react";
import {
  Pressable as RNPressable,
  PressableProps,
  PressableStateCallbackType,
} from "react-native";

type CustomPressableProps = PressableProps & {
  activeOpacity?: number;
};

export default function Pressable({
  children,
  style,
  activeOpacity,
  ...props
}: CustomPressableProps) {
  const customStyle = useCallback(
    (state: PressableStateCallbackType) => {
      const { pressed } = state;
      const baseStyle = { opacity: pressed ? activeOpacity : 1 };

      if (typeof style === "function") {
        const derivedStyle = style(state);
        return [baseStyle, derivedStyle];
      }
      return [baseStyle, style];
    },
    [activeOpacity, style]
  );

  return (
    <RNPressable style={customStyle} {...props}>
      {children}
    </RNPressable>
  );
}
