import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import React, { useCallback, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, ScrollView, Text, View } from 'react-native'
import { List, Switch, TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { DARK_THEME_TYPE, themSlice } from '../../redux/themeStore/reducers'
import { authSlice } from 'redux/authStore/authReducers'
import BottomSheet, { BottomSheetScrollView, BottomSheetTextInput } from '@gorhom/bottom-sheet'


const SettingsScreen = () => {
  const appDispatch = useDispatch();
  const data: DARK_THEME_TYPE = useSelector((state: any) => state.themeReducer);
  const { t } = useTranslation();
  const authDispatch = useDispatch();
  const toggleSwitch = (value: boolean) => {
    appDispatch(themSlice.actions.changeThemAction(value));
  }

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
          onPress: () => authDispatch(authSlice.actions.userLoginLogOutAction())
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
        <ScrollView>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9].map((data) => {
            return (
              <View>
                <TextInput />
                <Text onPress={() => {
                  bottomSheetRef.current.expand()
                }}>Open</Text>
                <Text onPress={() => {
                  bottomSheetRef.current.close()
                }}>Close</Text>
              </View>
            )
          })}
        </ScrollView>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          enableDynamicSizing={true}
          enablePanDownToClose={true}
          // snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView style={{ flex: 1 }}>
            <BottomSheetTextInput />
            <Text>Awesome 🎉</Text>
          </BottomSheetScrollView>
        </BottomSheet>
        {/* <LanguageSelector />
        <List.Item
          onPress={() => {
            appDispatch(themSlice.actions.changeThemAction(!data.isDarkTheme));
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

export default SettingsScreen
