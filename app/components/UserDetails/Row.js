import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Row = ({ label, value }) => {
  return (
    <View style={styles.cellInfo}>
      <Text style={styles.cellLabel}>{label}</Text>
      <Text style={styles.cellValue}>{value}</Text>
    </View>
  );
};

export default Row;
