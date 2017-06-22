import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
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

  render() {
    return (
      <ScrollView >

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
        <View>
          <PrimaryButton
            title="Submit"
          />
        </View>
      </ScrollView>
    );
  }
}

export default NewContact;
