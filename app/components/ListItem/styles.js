import { StyleSheet, Platform } from 'react-native';

import colors from '../../config/colors';

export const ARROW_SIZE = 25;

const isIos = Platform.OS === 'ios';

export const ARROW_ASSET_NAME = isIos ? 'ios-arrow-forward' : 'md-arrow-forward';


export default StyleSheet.create({

  container: {
    backgroundColor: colors.cardBackground,
    padding: 0,
    margin: 5,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 15,
    borderRadius: 25,
  },


  subcontainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  email: {
    fontSize: 15,
    color: colors.textColor,
  },

  arrowContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  arrow: {
    margin: 15,
    alignSelf: 'flex-end',
    color: colors.textColor,
  },

});
