import { Dimensions, Platform, StyleSheet } from 'react-native';

import colors from '../../config/colors';

const window = Dimensions.get('window');

const isIos = Platform.OS === 'ios';


export default StyleSheet.create({

  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: isIos ? StyleSheet.hairlineWidth : 0,

  },
  input: {
    height: 40,
    width: window.width,
    fontSize: 14,
    color: colors.textInputUnderlineColor,
  },
});
