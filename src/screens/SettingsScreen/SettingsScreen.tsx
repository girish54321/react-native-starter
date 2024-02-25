import React from 'react'
import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import { useTranslation } from 'react-i18next'
import { Alert, View } from 'react-native'
import { List, Switch } from 'react-native-paper'
import { userThemStore } from '../../redux/themeStore/reducers'
import { useAuthStore } from 'redux/authStore/authReducers'


const SettingsScreen = () => {
  const { changeThemAction } = userThemStore((state) => state)
  const { isDarkTheme } = userThemStore((state) => state.themStore)
  useAuthStore((state) => state.useAuthStore)

  const { userLoginLogOutAction } = useAuthStore((state) => state)

  const { t } = useTranslation();
  const toggleSwitch = (value: boolean) => {
    changeThemAction(value)
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
          onPress: () => userLoginLogOutAction()
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
            changeThemAction(!isDarkTheme)
          }}
          title={t('darkLightMode')}
          description={t('changeAppTheme')}
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => (
            <Switch value={isDarkTheme} onValueChange={toggleSwitch} />
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
