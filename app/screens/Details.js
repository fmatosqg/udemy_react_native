import React, { Component } from 'react';
import { ScrollView } from 'react-native';


import { DetailsHeader, Info, Actions } from '../components/UserDetails';
import colors from '../config/colors';

const Details = (props) => {
  const contact = props.navigation.state.params;

  let _scrollToBottomY;

  setTimeout(
        () => {
          this.scrollView.scrollToEnd();
        }
        , 1000,
    );

  return (
    <ScrollView
      ref={(ref) => { this.scrollView = ref; }}
      style={{ backgroundColor: colors.background }}
      onContentSizeChange={(contentWidth, contentHeight) => {
        _scrollToBottomY = contentHeight;
      }}
    >

      <DetailsHeader contact={contact} />
      <Actions contact={contact} />
      <Info contact={contact} />
    </ScrollView>);
};

export default Details;
