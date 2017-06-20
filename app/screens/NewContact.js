import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PrimaryTextInput from '../components/TextInput';

const fields = [
    { placeholder: 'First name', stateKey: 'firstName' },
    { placeholder: 'Last name', stateKey: 'lastName' },

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
                 />);
             })

          }


      </ScrollView>
    );
  }
}

export default NewContact;
