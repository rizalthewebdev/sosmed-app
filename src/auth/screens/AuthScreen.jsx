import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {gStyles} from '../../shared/styles/gStyles';
import {ActivityIndicator} from 'react-native-paper';

const AuthScreen = () => {
  const {replace} = useNavigation();
  const {isLoggedIn} = useSelector(state => state.AuthReducer);
  const handleNavigation = useCallback(async () => {
    if (isLoggedIn) {
      replace('MainScreen');
    } else {
      replace('LoginScreen');
    }
  }, [isLoggedIn, replace]);

  useEffect(() => {
    handleNavigation();
  }, [handleNavigation]);

  return (
    <SafeAreaView style={[gStyles.flex1, gStyles.flexCenter]}>
      <ActivityIndicator animating={true} color="#000" />
    </SafeAreaView>
  );
};

export default AuthScreen;
