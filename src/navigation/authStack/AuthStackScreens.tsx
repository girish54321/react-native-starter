import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/loginScreen/loginScreen';
import { Route } from 'constants/Route';
const AuthStack = createStackNavigator();

const AuthStackScreens = () => (
  <AuthStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <AuthStack.Screen name={Route.LOGIN_SCREEN} component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreens;
