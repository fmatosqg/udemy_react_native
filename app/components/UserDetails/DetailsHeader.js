import React from 'react';
import { Image, Text, View, TextInput } from 'react-native';

import moment from 'moment';


import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';



const DetailsHeader = ({ contact }) => {
  const date = new Date();
  const strDate = moment(date).format('HH:mm');

  return (<View style={styles.container} >

    <View style={styles.imageContainer}>
      <Image style={styles.avatar} source={{ uri: contact.picture.large }} />

      <Text style={styles.name}>
        {capitalizeFirstLetter(contact.name.first)} {capitalizeFirstLetter(contact.name.last)}</Text>
    </View>


  </View>);
};

export default DetailsHeader;

