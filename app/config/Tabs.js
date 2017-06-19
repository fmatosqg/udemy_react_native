import React from 'react';

import { TabNavigator } from 'react-navigation';
import { ContactsStack, NewContactStack, MeStack } from './ScreenStacks';


import AssetIcon, { ASSET_NAME_CONTACTS, ASSET_NAME_NEW_CONTACTS, ASSET_NAME_ME } from '../components/AssetIcon/AssetIcon';
import Me from '../screens/Me';


const Tabs = TabNavigator({

  TabContacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => { return <AssetIcon name={ASSET_NAME_CONTACTS} color={tintColor} />; }
      ,
    },
  },

  TabNew: {
    screen: NewContactStack,

    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor }) => {
        return <AssetIcon name={ASSET_NAME_NEW_CONTACTS} color={tintColor} />;
      },
    },
  },

  TabMe: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => {
        return <AssetIcon name={ASSET_NAME_ME} color={tintColor} />;
      }
              ,
    },
  },
});


export default Tabs;
