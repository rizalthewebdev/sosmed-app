import React from 'react';
import {View} from 'react-native';
import TextView from '../../shared/components/TextView';
import {gStyles} from '../../shared/styles/gStyles';

const AuthScreen = () => {
  return (
    <View>
      <View style={[gStyles.mv4]}>
        <TextView text="Login" />
      </View>
    </View>
  );
};

export default AuthScreen;
