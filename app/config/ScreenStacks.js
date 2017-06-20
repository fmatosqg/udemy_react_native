
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';

const isIos = Platform.OS === 'ios';

const isAndroidUseNavigatorBar = true;
/**
 * Overrides header when Android, so it won't show the navigation bar
 * under the tab navigator (current react-navigator bug)
 * @param navigatorOptions
 * @returns {*}
 */
const fixAndroidNavigationBar = (navigatorOptions) => {
  if (!isAndroidUseNavigatorBar && !isIos) {
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


const NewContactStack = StackNavigator({
  One: {
    screen: NewContact,
    navigationOptions: ({ navigation }) => {
      return (fixAndroidNavigationBar({
        title: 'New Contact',
      }));
    },
  },
});

const MeStack = StackNavigator({
  One: {
    screen: Me,
    navigationOptions: ({ navigation }) => {
      return (fixAndroidNavigationBar({
        title: 'Me',
      }));
    },
  },
});


export { ContactsStack, NewContactStack, MeStack };
