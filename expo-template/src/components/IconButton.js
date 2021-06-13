import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function IconButton({
  variant = '',
  iconName,
  color,
  size,
  onPress = () => null,
  style
}) {
  if (variant === 'MaterialCommunityIcons') {
    return (
      <TouchableOpacity style={[style]} onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      </TouchableOpacity>
    );
  }

  if (variant === 'AntDesign') {
    return (
      <TouchableOpacity style={[style]} onPress={onPress}>
        <AntDesign name={iconName} size={size} color={color} />
      </TouchableOpacity>
    );
  }

  return null;
}
