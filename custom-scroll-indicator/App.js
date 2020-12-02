import React from 'react';
import { ScrollView, Text, View } from 'react-native';
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
          </View>
        </View>
        <View style={{ flex: 4 }} />
      </View>
    </>
  );
}
