import React from 'react';
import { TextInput, View } from 'react-native';

import colors from '../../config/colors';
import styles from './styles';

const PrimaryTextInput = (props, { placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput

        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        // autoCorrect={false}
        autoCapitalize="none"
        keyboardAppearance="dark"
        returnKeyType="next"
        underlineColorAndroid={colors.textInputUnderlineColor}
        {...props}
      />
    </View>
  );
};


export default PrimaryTextInput;
