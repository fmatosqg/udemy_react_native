import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

import Actions from './Actions';

import { ASSET_NAME_CALL, ASSET_NAME_MAIL, ASSET_NAME_SMS } from '../AssetIcon/AssetIcon';


const DetailsHeader = ({ contact }) => {
  return (<View style={styles.container} >

    <View style={styles.imageContainer}>
      <Image style={styles.avatar} source={{ uri: contact.picture.large }} />

      <Text style={styles.name}>
        {capitalizeFirstLetter(contact.name.first)} {capitalizeFirstLetter(contact.name.last)}</Text>

    </View>

    <View >
      <Actions asset={ASSET_NAME_MAIL} label="email" value="aa@aa" />
      <Actions asset={ASSET_NAME_CALL} label="phone" value="123" />
      <Actions asset={ASSET_NAME_SMS} label="phone" value="123" />
    </View>
  </View>);
};

export default DetailsHeader;

