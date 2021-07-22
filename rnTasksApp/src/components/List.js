import React from 'react';
import { Box, FlatList, Text, Pressable } from 'native-base';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ task, isCompleted, index, toggleComplete }) => {
  return (
    <Box
      px={4}
      p={6}
      my={2}
      style={{
        borderWidth: 1,
        borderColor: 'purple.400',
        borderRadius: 6
      }}
      bg='purple.500'
      justifyContent='space-between'
      flexDirection='row'
      alignItems='center'
    >
      <Text
        fontSize='xl'
        color='white'
        style={{
          textDecorationLine: isCompleted ? 'line-through' : 'none'
        }}
      >
        {task}
      </Text>
      <Pressable onPress={() => toggleComplete(index)}>
        <FontAwesome
          color={isCompleted ? 'green' : 'yellow'}
          size={24}
          name='circle-o-notch'
        />
      </Pressable>
    </Box>
  );
};

const List = ({ tasks, toggleComplete }) => {
  return (
    <Box pt='4'>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            task={item.task}
            index={index}
            isCompleted={item.isCompleted}
            toggleComplete={toggleComplete}
          />
        )}
      />
    </Box>
  );
};

export default List;
