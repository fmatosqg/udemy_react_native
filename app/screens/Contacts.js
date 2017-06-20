import React from 'react';
import { View, Text, FlatList } from 'react-native';


import ListItem from '../components/ListItem/index';

import { contacts } from '../config/data';
import colors from '../config/colors';

const Contacts = (props) => {
  const handleRowPress = (item) => {
    props.navigation.navigate('Details', item);
    return null;
  };

  setTimeout(
      () => {
        const firstItem = contacts.shift();
        // props.navigation.
        // props.navigation.navigate('Details', firstItem);
        props.navigation.navigate('DrawerOpen');
      }
      , 1000,
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>

      <FlatList
        style={{ padding: 0 }}
        data={contacts}
        renderItem={({ item }) => {
          return (
            <ListItem
              firstName={item.name.first} lastName={item.name.last}
              email={item.email} photo={item.picture.thumbnail}
              onPress={() => { return handleRowPress(item); }}
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
