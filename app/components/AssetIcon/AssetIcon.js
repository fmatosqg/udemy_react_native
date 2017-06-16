import React from 'react';
import { View, Text, Platform } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const isIos = Platform.OS === 'ios';

export const ASSET_NAME_MAIL = 'mail';
export const ASSET_NAME_CALL = 'call';
export const ASSET_NAME_SMS = 'text';

const ARROW_SIZE = 25;

const AssetIcon = ({ name, color }) => {
  const assetString = (n) => {
    console.log('name ', name);
    if (isIos) {
      return `ios-${n}`;
    }
    return `md-${n}`;
  };

  return (
    <IconIon
      size={ARROW_SIZE}
      name={assetString(name)}
      color={color}
    />
  );
};

export default AssetIcon;
