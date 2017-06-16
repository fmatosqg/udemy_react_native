import React from 'react';
import { Image, View, Text } from 'react-native';

import styles, { assetEmail } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import AssetIcon from '../AssetIcon';


const DetailsHeader = ({ contact }) => {
  return (<View style={styles.container} >
    <Image style={styles.avatar} source={{ uri: contact.picture.large }} />

    <Text style={styles.name}>
      {capitalizeFirstLetter(contact.name.first)} {capitalizeFirstLetter(contact.name.last)}</Text>

    <AssetIcon name="mail" />
    <AssetIcon name="call" />
    <AssetIcon name="text" />
  </View>);
};

export default DetailsHeader;

