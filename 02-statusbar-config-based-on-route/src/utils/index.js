/*
 * Changing StatusBar configuration based on route
 * for Tabs is a bit more complicated.
 * Because all screens in a navigator are rendered once and kept rendered.
 * This is means that the latest StatusBar config set is used.
 *
 * This can be fixed by the solution provided here:
 * https://reactnavigation.org/docs/status-bar/#tabs-and-drawer
 *
 * This also works nicely with Expo's StatusBar component.
 */

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

export default function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
