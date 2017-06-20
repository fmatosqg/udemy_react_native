import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({

  primaryButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  primaryButton: {
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.link,

  },


  primaryButtonText: {
    color: colors.primaryButtonTextColor,
    paddingVertical: 15,
    paddingHorizontal: 40,
    fontSize: 14,
    fontWeight: '500',

  },
});
