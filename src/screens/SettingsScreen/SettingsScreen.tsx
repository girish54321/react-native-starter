import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser } from 'redux/authStore/action'
import { changeTheme } from '../../redux/themeStore/action'
import { DARK_THEME_TYPE } from '../../redux/themeStore/reducers'
import { useTheme } from '@react-navigation/native'
import { Colors } from 'Config/Colors'

const SettingsScreen = () => {
  const appDispatch = useDispatch();
  const data: DARK_THEME_TYPE = useSelector((state: any) => state.themeReducer);
  const { t } = useTranslation();
  const authDispatch = useDispatch();
  const toggleSwitch = (value: boolean) => {
    appDispatch(changeTheme(value));
  }
  const colors = useTheme().colors;
  const removeUser = () => {
    Alert.alert(
      'Sing Out?',
      'Are your sure.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'yes',
          onPress: () => authDispatch(logOutUser()),
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <AppView>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]} onPress={() => toggleSwitch(!data.isDarkTheme)}>Dark mode</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={removeUser}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <LanguageSelector />
      </View>
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SettingsScreen
