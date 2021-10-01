import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CustomTabs } from '../components/CustomTabBar';
import { Header } from '../components/Header';
import { BOOKS } from '../data/books';
import { AUTHORS } from '../data/authors';

// Screen Level Constants
const HEADER_HEIGHT = 200;
const TAB_BAR_HEIGHT = 48;

export const BooksScreen = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [routes] = useState([
    { key: 'tab1', title: 'Books' },
    { key: 'tab2', title: 'Authors' },
  ]);

  return (
    <View style={styles.container}>
      <Header
        title="What are you reading today?"
        headerHeight={HEADER_HEIGHT}
        scrollY={scrollY}
        topInset={insets.top}
      />
      <CustomTabs
        routes={routes}
        booksData={BOOKS}
        authorsData={AUTHORS}
        headerHeight={HEADER_HEIGHT}
        tabBarHeight={TAB_BAR_HEIGHT}
        scrollY={scrollY}
        topInset={insets.top}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
