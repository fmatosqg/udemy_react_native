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

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },

  name: {
    fontSize: 16,
    marginTop: 10,
    color: color.textColor,
  },
});

