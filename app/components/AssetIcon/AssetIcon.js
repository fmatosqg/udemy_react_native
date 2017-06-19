import React from 'react';
import { View, Text, Platform } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const isIos = Platform.OS === 'ios';

export const ASSET_NAME_MAIL = 'mail';
export const ASSET_NAME_CALL = 'call';
export const ASSET_NAME_SMS = 'text';

const ARROW_SIZE = 25;

const AssetIcon = ({ style, name, color }) => {
  const assetString = (n) => {
    if (isIos) {
      return `ios-${n}`;
    }
    return `md-${n}`;
  };

  if (name) {
    return (
      <IconIon
        style={[style]}
        size={ARROW_SIZE}
        name={assetString(name)}
        color={color}
      />

    );
  }
  return (null);
};

export default AssetIcon;
