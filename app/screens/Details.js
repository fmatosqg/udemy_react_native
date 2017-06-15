import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';


const Details = (props) => {
  updateName = () => {
    props.navigation.setParams({
      name: 'aaaaa',
      title: 'bbbb',
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="click" onPress={() => { this.updateName(); }} />

    </View>);
};

export default Details;
