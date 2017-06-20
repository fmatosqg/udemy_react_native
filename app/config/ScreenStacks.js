/**
 * Overrides header when Android, so it won't show the navigation bar
 * under the tab navigator (current react-navigator bug)
 * @param navigatorOptions
 * @returns {*}
 */
import React from 'react';
import { Platform, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';
import { DrawerButton } from '../components/Header/index';

const isIos = Platform.OS === 'ios';

const isAndroidUseNavigatorBar = true;
const buildNavigatorOptions = (navigation, isStackTop, navOptions) => {
  if (!isAndroidUseNavigatorBar && !isIos) {
    navOptions.header = () => { return (null); };
  }

  if (isStackTop !== undefined && isStackTop) {
    navOptions.headerLeft = (<DrawerButton
      onPress={() => {
        return navigation.navigate('DrawerOpen');
      }}
    />);
  }

  return navOptions;
};

const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,

    navigationOptions: ({ navigation }) => {
      return (buildNavigatorOptions(navigation, true, {
        title: 'Contacts',
      }));
    },
  },
  Details: {
    screen: Details,

    navigationOptions: ({ navigation }) => {
      return (buildNavigatorOptions(navigation, false, {
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)}`,
      }));
    },
  },
});


const NewContactStack = StackNavigator({
  NewContacts: {
    screen: NewContact,
    navigationOptions: ({ navigation }) => {
      return (buildNavigatorOptions(navigation, true, {
        title: 'New Contact',
      }));
    },
  },
});

const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: ({ navigation }) => {
      return (buildNavigatorOptions(navigation, true, {
        title: 'Me',
      }));
    },
  },

});


export { ContactsStack, NewContactStack, MeStack };
