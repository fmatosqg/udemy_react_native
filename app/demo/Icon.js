import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Me from '../screens/Me';

export const DemoStack = StackNavigator({

  FirstScreen: {
    screen: Contacts,
    navigationOptions: {
      title: 'whatever',
    },
  },
  SeconScreen: {
    screen: Me,
  },
});

