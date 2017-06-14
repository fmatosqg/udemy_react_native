import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import ListItem from '../components/ListItem/index';
import Icon from 'react-native-vector-icons/FontAwesome';


import { contacts } from '../config/data';
import colors from '../config/colors';

const Contacts = () => {
  const test = [{ test: 'test', a: 'aa', b: 'bb' }, { test: 'test', a: 'aa', b: 'bb' }];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Header</Text>
      <Icon
        name="rocket"
        size={35}
        style={{ alignSelf: 'flex-end', margin: 30 }}
        color="#9a9a9a"
      />
      <FlatList
        style={{ backgroundColor: '#ff000011', padding: 30 }}
        data={contacts}
        renderItem={({ item }) => {
          return (<View>
            <Text>{item.name.first} {item.name.last}</Text>
            <Text> {item.email}</Text>
          </View>);
        }}
        keyExtractor={(item) => { return item.email; }}
      />
      <Text>Footer</Text>
    </View>
  );
};

export default Contacts;
