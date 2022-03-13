import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  // const { person } = route.params || {};
  // console.log(route.params);
  // const [data, setData] = useState(route.params.person);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       const fetchedDetails = [];

  //       Object.keys(res).forEach(key => {
  //         fetchedDetails.push({ key, value: `${res[key]}` });
  //       });

  //       setData(fetchedDetails);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    // <View style={{ flex: 1 }}>
    //   {isLoading ? (
    //     <ActivityIndicator color="blue" size="large" />
    //   ) : (
    //     <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
    //       {data.map(person => (
    //         <Text
    //           style={{ fontSize: 24, paddingBottom: 2 }}
    //           key={person.key}
    //         >{`${person.key}: ${person.value}`}</Text>
    //       ))}
    //     </View>
    //   )}
    // </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
