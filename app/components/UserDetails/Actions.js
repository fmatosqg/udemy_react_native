
import React from 'react';
import { StyleSheet, Platform, TouchableOpacity, Text, View } from 'react-native';

import AssetIcon from '../AssetIcon';

import styles from './styles';
import colors from '../../config/colors';

import { toPhoneNumber } from '../../helpers/string';

const Actions = ({ asset, label, value }) => {
  return (
    <View style={styles.cellContainer}>
      <View style={styles.cellRow}>
        <View style={styles.cellInfo}>
          <Text style={styles.cellLabel}>{label}</Text>
          <Text style={styles.cellValue}>{value}</Text>
        </View>
          <View style={styles.cellAssets}>
        <TouchableOpacity>
          <AssetIcon style={styles.cellAsset} name={asset} color={colors.link} />
        </TouchableOpacity>
      </View>
      </View>
    </View>);
};

export default Actions;
