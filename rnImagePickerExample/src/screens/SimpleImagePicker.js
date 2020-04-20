import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { STYLES, COLORS } from './Styles';

export default function SimpleImagePicker() {
  const [imageSource, setImageSource] = useState(null);
  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Simple Image Picker
      </Text>
    </View>
  );
}
