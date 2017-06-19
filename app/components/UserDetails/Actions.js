import React from 'react';
import { View } from 'react-native';

import Action from './Action';
import { ASSET_NAME_CALL, ASSET_NAME_MAIL, ASSET_NAME_SMS } from '../AssetIcon/AssetIcon';

const Actions = ({ contact }) => {
  return (
    <View>
      <Action
        label="email"
        value={contact.email}
        actions={[
          { asset: ASSET_NAME_MAIL,
            onPress: () => {
            },
          },
        ]}
      />
      <Action
        label="home"
        value={contact.phone}
        actions={[
          { asset: ASSET_NAME_CALL,
            onPress: () => {
            } },
        ]}
      />
      <Action
        label="cell"
        value={contact.cell}
        actions={[
          { asset: ASSET_NAME_CALL,
            onPress: () => {
            } },
          {
            asset: ASSET_NAME_SMS,
            onPress: () => {
            },
          },
        ]}
      />
    </View>);
};

export default Actions;
