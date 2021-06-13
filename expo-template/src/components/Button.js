import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const Button = ({
  title,
  backgroundColor = '#000',
  titleColor = '#fff',
  titleSize = 16,
  onPress = () => null,
  width = '100%',
  outline = false,
  containerStyle
}) => {
  let borderWidth;
  let borderColor;

  if (outline) {
    backgroundColor = 'transparent';
    borderColor = titleColor;
    borderWidth = 1;
  }

  return (
    <Pressable
      style={args => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              width,
              borderColor,
              borderWidth
            },
            containerStyle
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor,
            width,
            borderColor,
            borderWidth
          },
          containerStyle
        ];
      }}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600'
  },
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    paddingHorizontal: 12
  }
});

export default Button;
