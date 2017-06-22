import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import colors from '../../config/colors';
import styles from './styles';

class PrimaryTextInput extends Component {

  focus = () => {
    this._input.focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid={colors.textInputUnderlineColor}
          {...this.props}
          ref={(input) => { return (this._input = input); }}
        />
      </View>
    );
  }
}


export default PrimaryTextInput;
