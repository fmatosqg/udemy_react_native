import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';


import { DetailsHeader } from '../components/UserDetails';
import colors from '../config/colors';

const Details = (props) => {
  const contact = props.navigation.state.params;

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>

      <DetailsHeader contact={contact} />
    </ScrollView>);
};

export default Details;
