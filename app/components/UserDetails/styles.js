import { StyleSheet, Platform, Dimensions } from 'react-native';
import color from '../../config/colors';


const windowWidth = Dimensions.get('window').width;

const avatarSize = windowWidth * (2 / 3);

export default StyleSheet.create({

  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
  },


  container: {

  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },

  name: {
    fontSize: 16,
    marginTop: 10,
    color: color.textColor,
  },


  cellContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: color.border,
    borderBottomColor: color.border,

    paddingVertical: 15,
    margin: 3,

    backgroundColor: color.cardBackground,
  },

  cellRow: {


    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  cellInfo: {
    flexDirection: 'column',
  },

  cellLabel: {
    // backgroundColor: '#ffff00',

    fontSize: 12,
    color: color.textSecondaryColor,
  },

  cellValue: {
    fontSize: 16,
    color: color.textColor,
    marginBottom: 5,
  },

  cellAssets: {
    flexDirection: 'row',
  },
  cellAsset: {
    padding: 5,
  },
});

