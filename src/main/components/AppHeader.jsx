import React from 'react';
import {Appbar} from 'react-native-paper';
import {gStyles} from '../../shared/styles/gStyles';
import useHandleLogout from '../../shared/hooks/useHandleLogout';

const AppHeader = () => {
  const handleLogout = useHandleLogout();

  return (
    <Appbar.Header>
      <Appbar.Content title="SosmedApp" titleStyle={[gStyles.fontSemiBold]} />
      <Appbar.Action icon="logout" onPress={handleLogout} />
    </Appbar.Header>
  );
};

export default AppHeader;
