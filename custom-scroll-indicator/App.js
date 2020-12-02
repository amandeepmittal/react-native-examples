import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { booksData } from './constants/data';

export default function App() {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp'
  });

  return (
    <>
      <StatusBar style='light' />
      <View style={{ flex: 1, backgroundColor: '#892cdc', paddingTop: 50 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>
            Custom Scroll Bar
          </Text>
        </View>
        <View style={{ flex: 3, marginVertical: 20 }}>
          <View
            style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}
          >
            <ScrollView
              contentContainerStyle={{ paddingRight: 14 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onContentSizeChange={height => {
                setCompleteScrollBarHeight(height);
              }}
              onLayout={({
                nativeEvent: {
                  layout: { height }
                }
              }) => {
                setVisibleScrollBarHeight(height);
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                { useNativeDriver: false }
              )}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: 12
                }}
              >
                {booksData.title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white'
                }}
              >
                {booksData.description}
              </Text>
            </ScrollView>
            <View
              style={{
                height: '100%',
                width: 6,
                backgroundColor: '#52057b',
                borderRadius: 8
              }}
            >
              <Animated.View
                style={{
                  width: 6,
                  borderRadius: 8,
                  backgroundColor: '#bc6ff1',
                  height: scrollIndicatorSize,
                  transform: [{ translateY: scrollIndicatorPosition }]
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 4 }} />
      </View>
    </>
  );
}
