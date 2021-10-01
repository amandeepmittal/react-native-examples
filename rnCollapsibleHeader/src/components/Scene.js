import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export const Scene = ({
  data,
  renderItem,
  headerHeight,
  tabBarHeight,
  onScrollRef,
  onMomentumScrollBegin,
  onScrollEndDrag,
  onMomentumScrollEnd,
  scrollY,
}) => {
  const renderSpace = () => <View style={styles.spaceContainer} />;

  return (
    <Animated.FlatList
      scrollToOverflowEnabled={true}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: true,
        },
      )}
      ref={onScrollRef}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      ItemSeparatorComponent={renderSpace}
      ListHeaderComponent={renderSpace}
      ListFooterComponent={renderSpace}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: headerHeight + tabBarHeight,
        paddingHorizontal: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  spaceContainer: {
    height: 20,
  },
});
