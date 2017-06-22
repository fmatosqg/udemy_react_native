import React, { Component } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import { me } from '../config/data';
import DetailsHeader from '../components/UserDetails/DetailsHeader';
import Info from '../components/UserDetails/Info';
import Actions from '../components/UserDetails/Actions';
import colors from '../config/colors';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const Me = () => {
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <DetailsHeader contact={me} />
      <PrimaryButton
        style={{ flex: 1, paddingVertical: 5 }}
        title="Edit Profile"
        onPress={() => {}}
      />
      <Actions contact={me} />
      <Info contact={me} />
    </ScrollView>);
};

export default Me;

