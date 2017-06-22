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


const onChangeText = (text, stateKey) => {
  console.log('text is ', text);
  const mod = {};
  mod[stateKey] = text;
  // this.setState(mod);
};

class NewContact extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit() {
    alert('Submit');
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
                   onChangeText={onChangeText}
                   {...field}
                 />);
             })

          }


        <View style={styles.submitContainer}>
          <PrimaryButton
            title="Save"
            onPress={() => { return this.handleSubmit(); }}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

}

export default NewContact;
