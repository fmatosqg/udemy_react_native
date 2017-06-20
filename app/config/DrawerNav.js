import React from 'react';
import { DrawerNavigator } from 'react-navigation';


import { NewContactStack, ContactsStack, MeStack } from './ScreenStacks';
import AssetIcon, { ASSET_NAME_CONTACTS, ASSET_NAME_NEW_CONTACTS, ASSET_NAME_ME } from '../components/AssetIcon/AssetIcon';

const DrawerNav = DrawerNavigator({
  ContactsButton: {
    screen: ContactsStack,
    navigationOptions: {
      drawerLabel: 'Contacts',
      drawerIcon: () => { return (<AssetIcon name={ASSET_NAME_CONTACTS} />); },
    },
  },
  NewContactButton: {
    screen: NewContactStack,
    navigationOptions: {
      drawerLabel: 'New Contact',
      drawerIcon: () => { return (<AssetIcon name={ASSET_NAME_NEW_CONTACTS} />); },
    },
  },
  MeButton: {
    screen: MeStack,
    navigationOptions: {
      drawerLabel: 'Me',
      drawerIcon: () => { return (<AssetIcon name={ASSET_NAME_ME} />); },
    },
  },


});

export default DrawerNav;
