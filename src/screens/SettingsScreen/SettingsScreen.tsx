import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser } from 'redux/authStore/action'
import { changeTheme } from '../../redux/themeStore/action'
import { DARK_THEME_TYPE } from '../../redux/themeStore/reducers'
import ImagePicker from 'react-native-image-crop-picker';
import { useTheme } from '@react-navigation/native'

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
      <View
        style={{
          flex: 1
        }}>
        <LanguageSelector />
        <TouchableOpacity style={styles.button} onPress={() => {
          toggleSwitch(!data.isDarkTheme)
        }}>
          <View style={[styles.switch, true && styles.switchOn]} />
        </TouchableOpacity>
        <Text style={[styles.label, { color: colors.text }]}>{data.isDarkTheme ? 'ON' : 'OFF'}</Text>
        {/* <List.Item
          onPress={() => {
            appDispatch(changeTheme(!data.isDarkTheme))
          }}
          title={t('darkLightMode')}
          description={t('changeAppTheme')}
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => (
            <Switch value={data.isDarkTheme} onValueChange={toggleSwitch} />
          )}
        />
        <List.Item
          onPress={removeUser}
          title={t('logOut')}
          description={t('singOut')}
          left={(props) => <List.Icon {...props} icon="exit-to-app" />}
        /> */}
      </View>
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ccc',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  switch: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  switchOn: {
    backgroundColor: '#0080ff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen
