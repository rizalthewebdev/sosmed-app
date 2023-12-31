import React from 'react';
import {Appbar} from 'react-native-paper';
import {gStyles} from '../../shared/styles/gStyles';

const AppHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="SosmedApp" titleStyle={[gStyles.fontSemiBold]} />
    </Appbar.Header>
  );
};

export default AppHeader;
