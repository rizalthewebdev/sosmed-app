/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import TextView from '../../shared/components/TextView';
import {gStyles} from '../../shared/styles/gStyles';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import useValidateAuth from '../hooks/useValidateAuth';
import useMutateUserLogin from '../hooks/useMutateUserLogin';
import useMutateUserRegister from '../hooks/useMutateUserRegister';

const AuthSection = ({type = 'register', data, setData}) => {
  const {navigate} = useNavigation();
  const validate = useValidateAuth(type);
  const {mutateAsync: handleLoginUser} = useMutateUserLogin();
  const {mutateAsync: handleUserRegister} = useMutateUserRegister();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const dataByType = {
    register: {
      title: 'Register',
      button: 'Daftar',
      footer: 'Sudah punya akun?',
      footerButton: 'Masuk disini',
      footerNavigateDestination: 'LoginScreen',
    },
    login: {
      title: 'Login',
      button: 'Masuk',
      footer: 'Belum punya akun?',
      footerButton: 'Daftar disini',
      footerNavigateDestination: 'RegisterScreen',
    },
  };

  const handleAuthentication = () => {
    const callbackFunction = data =>
      type === 'register' ? handleUserRegister(data) : handleLoginUser(data);
    validate(data, callbackFunction);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={[gStyles.flex1, {justifyContent: 'center'}]}>
        <TextView
          style={[gStyles.fontSemiBold, {fontSize: 20, textAlign: 'center'}]}>
          {dataByType[type].title}
        </TextView>
        <View style={[gStyles.ma4]}>
          {type === 'register' && (
            <TextInput
              mode="outlined"
              label="Name"
              autoCapitalize="words"
              value={data.name}
              onChangeText={name => setData(prevData => ({...prevData, name}))}
              style={[gStyles.mb4]}
            />
          )}
          <TextInput
            mode="outlined"
            label="Email"
            value={data.email}
            onChangeText={email => setData(prevData => ({...prevData, email}))}
            style={[gStyles.mb4]}
          />
          <TextInput
            mode="outlined"
            value={data.password}
            secureTextEntry={!isShowPassword}
            right={
              <TextInput.Icon
                onPress={() => setIsShowPassword(!isShowPassword)}
                icon={isShowPassword ? 'eye-off' : 'eye'}
              />
            }
            onChangeText={password =>
              setData(prevData => ({...prevData, password}))
            }
            label="Password"
          />
        </View>
        <Button
          onPress={handleAuthentication}
          style={[gStyles.ma4, {}]}
          buttonColor="#111"
          mode="contained">
          <TextView style={{color: 'white'}} text={dataByType[type].button} />
        </Button>
      </ScrollView>
      <View style={[gStyles.flexCenter, gStyles.row, gStyles.ma4]}>
        <TextView style={{color: '#777'}} text={dataByType[type].footer} />
        <TouchableOpacity
          style={{paddingLeft: 8}}
          onPress={() => navigate(dataByType[type].footerNavigateDestination)}>
          <TextView bold text={dataByType[type].footerButton} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AuthSection;
