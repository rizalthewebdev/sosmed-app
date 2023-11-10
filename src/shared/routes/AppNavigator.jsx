import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../main/screens/MainScreen';
import AuthScreen from '../../auth/screens/AuthScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AuthScreen"
      screenOptions={{
        statusBarStyle: 'dark',
        statusBarColor: '#fff',
        contentStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
