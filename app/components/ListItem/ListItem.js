import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

import style, { ARROW_SIZE, ARROW_ASSET_NAME } from './styles';
import colors from '../../config/colors';

const ListItem = ({ firstName, lastName, email, photo, onPress }) => {
  const avatar = {
    uri: photo,
  };
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >

      <View style={style.container}>

        <Image style={style.avatar} source={avatar} />
        <View style={style.subcontainer}>
          <Text style={style.name}>{firstName} {lastName}</Text>
          <Text style={style.email}>{email}</Text>
        </View>

        <View style={style.arrowContainer}>
          <IconIon
            style={style.arrow}
            size={ARROW_SIZE}
            name={ARROW_ASSET_NAME}
          />
        </View>
      </View>
    </TouchableHighlight>);
};

export default ListItem;
