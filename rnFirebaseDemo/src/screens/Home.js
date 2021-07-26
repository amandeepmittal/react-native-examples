import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Add an Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}
