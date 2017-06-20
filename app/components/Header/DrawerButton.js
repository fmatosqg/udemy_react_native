import React from 'react';
import { TouchableOpacity, Button, View } from 'react-native';
import styles from './styles';
import AssetIcon from '../AssetIcon/AssetIcon';


const DrawerButton = ({ onPress }) => {
  return (<TouchableOpacity onPress={onPress} style={styles.drawerButtonContainer}>
    <AssetIcon name="menu" />
  </TouchableOpacity>);
};

export default DrawerButton;
