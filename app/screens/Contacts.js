import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';


import ListItem from '../components/ListItem/index';
import Header from '../components/Header/index';

import { contacts } from '../config/data';
import colors from '../config/colors';

const Contacts = () => {
  handleRowPress = (item) => {
    return null;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>

      <Header title="Contacts" />
      <FlatList
        style={{ padding: 0 }}
        data={contacts}
        renderItem={({ item }) => {
          return (
            <ListItem
              firstName={item.name.first} lastName={item.name.last}
              email={item.email} photo={item.picture.thumbnail}
              onPress={() => { return this.handleRowPress(item); }}
            />
          );
        }}
        keyExtractor={(item) => { return item.email; }}
      />
      <Text>Footer</Text>
    </View>
  );
};

export default Contacts;
