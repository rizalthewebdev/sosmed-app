/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AnimatedFAB} from 'react-native-paper';

const CreatePostButton = ({onPress}) => {
  return (
    <AnimatedFAB
      icon={'plus'}
      {...{onPress}}
      style={[{position: 'absolute', bottom: 20, right: 20}]}
    />
  );
};

export default CreatePostButton;
