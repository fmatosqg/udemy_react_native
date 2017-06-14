import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';

const Contacts = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Header</Text>
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) => { return <View><Text>hello {item.email}</Text></View>; }}
        keyExtractor={(item) => { return item.email; }}
      />
      <Text>Footer</Text>
    </View>
  );
};

export default Contacts;
