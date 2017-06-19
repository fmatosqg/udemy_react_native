import React from 'react';
import { View } from 'react-native';

import moment from 'moment';

import styles from './styles';
import Row from './Row';

import { capitalizeFirstLetter } from '../../helpers/string';


const Info = ({ contact }) => {
  return (
    <View style={styles.infoContainer}>
      <Row label="city" value={capitalizeFirstLetter(contact.location.city)} />
      <Row label="birthday" value={moment(contact.dob).format('MMMM Do, YYYY')} />
      <Row label="registered" value={moment(contact.registered).format('MMMM Do, YYYY')} />
      <Row label="username" value={contact.login.username} />
    </View>
  );
};

export default Info;

