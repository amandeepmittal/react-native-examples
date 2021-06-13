import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import IconButton from './IconButton';

const Input = ({
  leftIcon,
  iconColor = '#000',
  rightIcon,
  iconVariant = '',
  inputStyle,
  containerStyle,
  placeholderTextColor = '#444',
  onPressIcon,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <IconButton
          variant={iconVariant}
          iconName={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
      />
      {rightIcon ? (
        <IconButton
          variant={iconVariant}
          iconName={rightIcon}
          size={20}
          color={iconColor}
          style={styles.rightIcon}
          onPress={onPressIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12
  },
  leftIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 18
  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: 10
  }
});

export default Input;
