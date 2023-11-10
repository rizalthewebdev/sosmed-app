/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextView = props => {
  const {
    text,
    children,
    anotherText,
    bold,
    style,
    onPress,
    containerStyle,
    additionalText,
    additionalTextStyle,
    additionalTextBold,
    additionalTextOnPress,
  } = props;
  return (
    <View
      onPress={onPress}
      style={containerStyle == null ? null : containerStyle}>
      <Text
        {...props}
        style={[
          styles.Inter,
          bold && {fontFamily: 'Inter-Bold', fontWeight: 'bold'},
          style,
        ]}>
        {text ?? children ?? ''}
        <Text
          onPress={additionalTextOnPress}
          style={[
            additionalTextStyle,
            additionalTextBold && {
              fontFamily: 'Inter-Bold',
              fontWeight: 'bold',
            },
          ]}>
          {additionalText}
        </Text>
        {anotherText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Inter: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'black',
  },
});

export default TextView;
