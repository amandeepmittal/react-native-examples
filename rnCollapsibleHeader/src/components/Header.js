import React from 'react';
import { StyleSheet, Animated } from 'react-native';

export const Header = ({ title, headerHeight, topInset, scrollY }) => {
  const interpolatedHeight = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight + topInset],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [1, 0],
    extrapolateRight: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {
          height: headerHeight,
          transform: [{ translateY: interpolatedHeight }],
        },
      ]}>
      <Animated.Text style={[styles.headerText, { opacity }]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    top: 0,
    zIndex: 10,
    position: 'absolute',
    backgroundColor: '#FE8F8F',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
});
