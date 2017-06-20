import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const PrimaryTextInput = ({ props, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autocorrect={false}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};


export default PrimaryTextInput;
