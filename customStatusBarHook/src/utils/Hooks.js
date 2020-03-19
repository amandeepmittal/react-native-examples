import React, { useCallback } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

/**
 * Provide a simple way to change the status bar color
 * when the current screen focus
 */

export const useStatusBar = style => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style);
    }, [])
  );
};
