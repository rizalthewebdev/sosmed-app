import React from 'react';
import {Appbar} from 'react-native-paper';
import {gStyles} from '../../shared/styles/gStyles';
import {useDispatch} from 'react-redux';
import {logout} from '../../shared/redux/actions/authActions';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const dispatch = useDispatch();
  const {reset} = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
        },
      ],
    });
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title="Manusa Media"
          titleStyle={[gStyles.fontSemiBold]}
        />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar.Header>
    </>
  );
};

export default MainScreen;
