import { StyleSheet, Platform, Dimensions } from 'react-native';

import colors from '../../config/colors';

const width = Dimensions.get('window').width; // full width

export default StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: colors.headerBackground,
    width,
    justifyContent: 'center',
    flexDirection: 'row',

  },
  title: {
    color: colors.headerFontColor,
    fontSize: 26,
    padding: 10,
  },

});

