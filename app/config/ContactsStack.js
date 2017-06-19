import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';

const isIos = Platform.OS === 'ios';

const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,

    navigationOptions: () => {
      if (isIos) {
        return ({
          title: 'Contacts',
        });
      }
      return ({
        header: null,
        title: 'Contacts',
      });
    },
  },
  Details: {
    screen: Details,

    navigationOptions: ({ navigation }) => {
      if (isIos) {
        return ({
          title: `${capitalizeFirstLetter(navigation.state.params.name.first)}`,
        });
      }
      return ({
        header: null,
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)}`,
      });
    },
  },
});


export default ContactsStack;
