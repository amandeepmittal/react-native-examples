import React, { useState } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import VerticalCustomScroll from './components/VerticalCustomScroll';

import { booksData } from './constants/data';

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#892cdc', paddingTop: 50 }}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>
//           Custom Scroll Bar
//         </Text>
//       </View>
//       <View style={{ flex: 3, marginVertical: 16 }}>
//         <VerticalCustomScroll
//           paddingHorizontal={18}
//           scrollTextHeading={booksData.title}
//           scrollTextHeadingSize={22}
//           scrollTextHeadingColor='white'
//           scrollTextHeadingMarginBottom={12}
//           scrollText={booksData.description}
//           scrollTextSize={18}
//           scrollTextColor='white'
//           scrollBarColor='#52057b'
//           scrollBarBorderRadius={8}
//           scrollBarIndicatorColor='#bc6ff1'
//           contentPaddingRight={14}
//           scrollBarWidth={6}
//         />
//       </View>
//       <View style={{ flex: 4 }} />
//     </View>
//   );
// }

export default function App() {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = new Animated.Value(0);

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

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
                  layout: { x, y, width, height }
                }
              }) => {
                setVisibleScrollBarHeight(height);
              }}
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
              <View
                style={{
                  width: 6,
                  borderRadius: 8,
                  backgroundColor: '#bc6ff1',
                  height: scrollIndicatorSize
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
