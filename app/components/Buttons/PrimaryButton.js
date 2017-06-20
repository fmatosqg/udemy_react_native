import React from 'react';
import { TouchableOpacity, Text, Button, View } from 'react-native';

import styles from './styles';

const PrimaryButton = ({ title, onPress }) => {
  // return (<Button title={title} />);
  return (<View style={styles.primaryButtonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  </View>);
};

export default PrimaryButton;
