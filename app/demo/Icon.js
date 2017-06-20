import React from 'react';
import { TextInput } from 'react-native';

const wwww = ({ placeholder, onChange }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{ width: 300, height: 40 }}
      onChangeText={onChange}
      autocorrect={false}
      autoCapitalize="none"
    />
  );
};


export default wwww;
