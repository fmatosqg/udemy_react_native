

import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

import Action from './Action';


import { ASSET_NAME_CALL, ASSET_NAME_MAIL, ASSET_NAME_SMS } from '../AssetIcon/AssetIcon';


const DetailsHeader = ({ contact }) => {
  return (<View style={styles.container} >

    <View style={styles.imageContainer}>
      <Image style={styles.avatar} source={{ uri: contact.picture.large }} />

      <Text style={styles.name}>
        {capitalizeFirstLetter(contact.name.first)} {capitalizeFirstLetter(contact.name.last)}</Text>
    </View>

    <View>
      <Action
        asset={ASSET_NAME_MAIL} label="email"
        value={contact.email}
        actions={[
          { asset: ASSET_NAME_MAIL,
            onPress: () => {
            },
          },
        ]}
      />
      <Action
        asset={ASSET_NAME_MAIL} label="home"
        value={contact.phone}

        actions={[
          { asset: ASSET_NAME_CALL,
            onPress: () => {
            } },
        ]}
      />
      <Action
        asset={ASSET_NAME_MAIL} label="cell"
        value={contact.cell}
        actions={[
          { asset: ASSET_NAME_SMS,
            onPress: () => {
            } },
          {
            asset: ASSET_NAME_CALL,
            onPress: () => {
            },
          },
        ]}
      />

    </View>
  </View>);
};

export default DetailsHeader;

