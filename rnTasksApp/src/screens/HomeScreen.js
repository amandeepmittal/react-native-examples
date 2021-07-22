import React from 'react';
import { Heading, Box } from 'native-base';

import List from '../components/List';
import InputField from '../components/InputField';

function HomeScreen() {
  const [tasks, setTasks] = React.useState([]);
  const [task, onChangeText] = React.useState('');
  const [isCompleted] = React.useState(false);

  const add = () => {
    if (task !== '') {
      const newTasks = [{ task, isCompleted }, ...tasks];
      setTasks(newTasks);
      onChangeText('');
    }
  };

  const toggleComplete = index => {
    const newTodos = [...tasks];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTasks(newTodos);
  };

  return (
    <Box flex={1} bg='gray.800'>
      <Box mt={12} px='2'>
        <Heading color='white'>Today's schedule</Heading>
        <Heading color='purple.400' size='lg' pt={2}>
          {tasks.length} Tasks
        </Heading>
        {/* Add Input Field */}
        <InputField task={task} onChangeText={onChangeText} add={add} />
        {/* Add a FlatList to show list of items  */}
        <List tasks={tasks} toggleComplete={toggleComplete} />
      </Box>
    </Box>
  );
}

export default HomeScreen;
