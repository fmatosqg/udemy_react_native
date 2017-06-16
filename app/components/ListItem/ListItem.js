import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

import style, { ARROW_SIZE, ARROW_ASSET_NAME } from './styles';
import colors from '../../config/colors';
import { capitalizeFirstLetter } from '../../helpers/string';
import AssetIcon from '../AssetIcon/AssetIcon';

const ListItem = ({ firstName, lastName, email, photo, onPress }) => {
  const fullName = `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.cardSelected}
    >

      <View style={style.container}>

        <Image style={style.avatar} source={{ uri: photo }} />
        <View style={style.subcontainer}>
          <Text style={style.name}>{fullName}</Text>
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
