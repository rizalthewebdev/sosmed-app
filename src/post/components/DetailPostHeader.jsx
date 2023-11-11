import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {gStyles} from '../../shared/styles/gStyles';

const DetailPostHeader = ({title}) => {
  const {goBack} = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content {...{title}} titleStyle={[gStyles.fontSemiBold]} />
    </Appbar.Header>
  );
};

export default DetailPostHeader;
