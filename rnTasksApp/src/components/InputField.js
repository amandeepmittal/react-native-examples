import React from 'react';
import { Input, Pressable } from 'native-base';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// make sure to pass it as a prop
const InputField = ({ task, onChangeText, add }) => {
  return (
    <Input
      mt={3}
      value={task}
      onChangeText={text => onChangeText(text)}
      variant='outline'
      placeholder='Add a Input'
      placeholderTextColor='gray.700'
      borderColor='gray.700'
      color='white'
      selectionColor='white'
      focus
      maxLength={32}
      InputRightElement={
        // Modify the value of onPress
        <Pressable onPress={add} mr={2}>
          <FontAwesome color='white' size={24} name='plus' />
        </Pressable>
      }
    />
  );
};

export default InputField;
