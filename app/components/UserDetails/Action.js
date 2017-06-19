import shortid from 'shortid';

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import AssetIcon from '../AssetIcon';

import styles from './styles';
import colors from '../../config/colors';

const Action = ({ actions, label, value }) => {
  if (actions == undefined) {
    actions = [];
  }
  return (
    <View style={styles.cellContainer}>
      <View style={styles.cellRow}>
        <View style={styles.cellInfo}>
          <Text style={styles.cellLabel}>{label}</Text>
          <Text style={styles.cellValue}>{value}</Text>
        </View>

        <View style={styles.cellAssets}>
          { actions.map((action, index) => {
            return (
              <TouchableOpacity onPress={action.onPress} key={shortid.generate()}>
                <AssetIcon style={styles.cellAsset} name={action.asset} color={colors.link} />
              </TouchableOpacity>
            );
          },
              )
          }
        </View>
      </View>
    </View>);
};

export default Action;
