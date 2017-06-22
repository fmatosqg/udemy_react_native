import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryTextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';


const fields = [
    { placeholder: 'First name', stateKey: 'firstName' },
    { placeholder: 'Last name', stateKey: 'lastName' },
    { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
    { placeholder: 'Mobile Phone', stateKey: 'mobilePhone', keyboardType: 'phone-pad' },
    { placeholder: 'Home Phone', stateKey: 'homePhone', keyboardType: 'phone-pad' },
    { placeholder: 'City', stateKey: 'city' },
    { placeholder: 'Birthday', stateKey: 'birthday' },
    { placeholder: 'Registered', stateKey: 'registered' },
    { placeholder: 'Username', stateKey: 'username' },
];


const styles = StyleSheet.create({
  submitContainer: {
    marginTop: 20,
  },
});


class NewContact extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onChangeText = (text, stateKey) => {
    console.log('text is ', text);
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  };


  handleSubmit(index, override = false) {
    if (index === fields.length - 1 || override) {
      alert('Submit');
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  }

  render() {
    return (

      <KeyboardAwareScrollView>
        {
             fields.map((field, index) => {
               return (
                 <PrimaryTextInput
                   placeholder={field.placeholder}
                   key={field.stateKey}
                   onChangeText={(text) => { return this.onChangeText(text, field.stateKey); }}
                   {...field}
                   returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
                   onSubmitEditing={() => { return this.handleSubmit(index); }}
                   ref={(input) => { return (this[field.stateKey] = input); }}
                 />);
             })

          }

        <View style={styles.submitContainer}>
          <PrimaryButton
            title="Save"
            onPress={() => { return this.handleSubmit(0, true); }}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

}

export default NewContact;
