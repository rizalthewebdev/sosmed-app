/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const TextView = props => {
  const {text, children, bold, style} = props;
  return (
    <Text
      {...props}
      style={[
        styles.Rubik,
        bold && {fontFamily: 'Rubik-SemiBold', fontWeight: '700'},
        style,
      ]}>
      {text ?? children ?? ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  Rubik: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    color: 'black',
  },
});

export default TextView;
