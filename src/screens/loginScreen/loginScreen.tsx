import React, { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  NativeModules,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { userLoginAction } from '../../redux/authStore/action';
import SizedBox from '@components/SizedBox';
import { AppButton } from '@components/Button/Button';
const LoginScreen = () => {
  const [userData, setuserData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidEmail: false,
    isValidPassword: false,
  });
  const data = NativeModules.RNConfigModule;

  const authDispatch = useDispatch();
  const saveUserLogin = () => {
    if (userData.isValidEmail && userData.isValidPassword) {
      let data = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      };
      authDispatch(userLoginAction(data))
    } else {

    }
  };

  const textEmailChange = (val: any) => {
    setuserData({
      ...userData,
      email: val.trim(),
      isValidEmail: true,
    });
  };

  const textPasswordChange = (val: any) => {
    if (val.trim().length >= 8) {
      setuserData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setuserData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        paddingHorizontal: 34,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      </View>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <TouchableOpacity
          style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text >Running {data.BUILD_ENV}</Text>
          <View style={{ marginTop: 8 }} />
          <Text >Your Base URL is {data.BASE_URL}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={userData.email}
          placeholder="Email"
          onChangeText={textEmailChange}
        />
        <SizedBox size={12} width={0} />
        <TextInput
          style={styles.input}
          secureTextEntry={userData.secureTextEntry}
          placeholder="Password"
          autoCapitalize="none"
          value={userData.password}
          onChangeText={textPasswordChange}
        />
        <SizedBox size={12} width={0} />
        <AppButton children={"Login"} onPress={() => saveUserLogin()} />
      </View>
      <View style={{ flex: 1 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    padding: 8
  },
});