import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../main/screens/MainScreen';
import AuthScreen from '../../auth/screens/AuthScreen';
import RegisterScreen from '../../auth/screens/RegisterScreen';
import LoginScreen from '../../auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen"
      screenOptions={{
        statusBarStyle: 'dark',
        statusBarColor: '#fff',
        contentStyle: {backgroundColor: '#fff'},
        headerShown: false,
      }}>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
