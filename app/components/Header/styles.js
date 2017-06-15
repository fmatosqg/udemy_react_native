import { StyleSheet, Platform, Dimensions } from 'react-native';

import colors from '../../config/colors';

const width = Dimensions.get('window').width; // full width

const isIos = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    marginTop: isIos ? 20 : 0,
    backgroundColor: colors.headerBackground,
    width,
    justifyContent: 'center',
    flexDirection: 'row',

  },
  title: {
    color: colors.headerFontColor,
    fontSize: 26,
    padding: 10,
    fontWeight: isIos ? 'normal' : 'bold',
  },

});

