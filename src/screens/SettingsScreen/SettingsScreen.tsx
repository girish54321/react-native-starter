import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, View } from 'react-native'
import { List, Switch } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser } from 'redux/authStore/action'
import { changeTheme } from '../../redux/themeStore/action'
import { DARK_THEME_TYPE } from '../../redux/themeStore/reducers'


const SettingsScreen = () => {
  const appDispatch = useDispatch();
  const data: DARK_THEME_TYPE = useSelector((state: any) => state.themeReducer);
  const { t } = useTranslation();
  const authDispatch = useDispatch();
  const toggleSwitch = (value: boolean) => {
    appDispatch(changeTheme(value));
  }

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
        <List.Item
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
        />
      </View>
    </AppView>
  )
}

export default SettingsScreen
