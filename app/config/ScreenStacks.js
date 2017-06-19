import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';


const fixAndroidNavigationBar = (navigatorOptions) => {
  if (Platform.OS !== 'ios') {
    navigatorOptions.header = () => { return (null); };
  }
  return navigatorOptions;
};


const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,

    navigationOptions: () => {
      return (fixAndroidNavigationBar({
        title: 'Contacts',
      }));
    },
  },
  Details: {
    screen: Details,

    navigationOptions: ({ navigation }) => {
      return (fixAndroidNavigationBar({
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)}`,
      }));
    },
  },
});


export default ContactsStack;
