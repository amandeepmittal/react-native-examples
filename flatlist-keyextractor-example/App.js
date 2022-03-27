import { StyleSheet, Text, View, FlatList } from 'react-native';

const DATA_WITH_ID = [
  {
    userId: 1,
    title: 'quidem molestiae enim'
  },
  {
    userId: 2,
    title: 'sunt qui excepturi placeat culpa'
  },
  {
    userId: 3,
    title: 'omnis laborum odio'
  },
  {
    userId: 4,
    title: 'non esse culpa molestiae omnis sed optio'
  },
  {
    userId: 5,
    title: 'eaque aut omnis a'
  },
  {
    userId: 6,
    title: 'natus impedit quibusdam illo est'
  },
  {
    userId: 7,
    title: 'quibusdam autem aliquid et et quia'
  },
  {
    userId: 8,
    title: 'qui fuga est a eum'
  },
  {
    userId: 9,
    title: 'saepe unde necessitatibus rem'
  },
  {
    userId: 10,
    title: 'distinctio laborum qui'
  }
];

const DATA_WITHOUT_ID = [
  {
    title: 'quidem molestiae enim'
  },
  {
    title: 'sunt qui excepturi placeat culpa'
  },
  {
    title: 'omnis laborum odio'
  },
  {
    title: 'non esse culpa molestiae omnis sed optio'
  },
  {
    title: 'eaque aut omnis a'
  },
  {
    title: 'natus impedit quibusdam illo est'
  },
  {
    title: 'quibusdam autem aliquid et et quia'
  },
  {
    title: 'qui fuga est a eum'
  },
  {
    title: 'saepe unde necessitatibus rem'
  },
  {
    title: 'distinctio laborum qui'
  }
];

export default function App() {
  const renderList = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_WITH_ID}
        renderItem={renderList}
        keyExtractor={item => item.userId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 44
  },
  listItem: {
    padding: 10
  },
  listItemText: {
    padding: 2,
    fontSize: 16,
    color: 'black'
  }
});
