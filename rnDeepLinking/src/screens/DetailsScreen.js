import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const DetailsScreen = ({ route }) => {
  const params = route.params || {};
  const { personDetailsId, personId } = params;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (personId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({ key, value: `${res[key]}` });
          });
          setData(fetchedDetails);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${personDetailsId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({ key, value: `${res[key]}` });
          });

          setData(fetchedDetails);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          {data.map(person => (
            <Text
              style={{ fontSize: 24, paddingBottom: 2 }}
              key={person.key}
            >{`${person.key}: ${person.value}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default DetailsScreen;
