import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersScreen } from '@screens/UsersScreen/UsersScreen';
import React, { FC, useEffect, } from 'react';
import { HOME_STACK_OPTIONS, USERLIST_STACK_OPTIONS, } from './NavigationTypings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import { darkThemeType } from 'redux/themeStore/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper'
import { checkTheme } from '../redux/themeStore/action';
import { Colors } from '../Config/Colors'
import { useTranslation } from 'react-i18next';
import { Route } from 'constants/Route';
import AppStatusBar from '@components/appStatusBar/appStatusBar';
import AuthStackScreens from './authStack/AuthStackScreens';
import LoadingView from '@components/loadingView';
import { AUTH_TYPE } from 'redux/authStore/authReducers';
import AsyncStorage from '@react-native-community/async-storage';
import { checkUserLogin } from 'redux/authStore/action';
import { setTopLevelNavigator } from './NavigationService';
import { HomeTabs } from '@screens/tabScreen/HomeTabs';

const Stack = createStackNavigator();
const SettingStack = createStackNavigator();
const UserStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const Navigation: FC = () => {
    const data: darkThemeType = useSelector((state: any) => state.themeReducer);
    const authState: AUTH_TYPE = useSelector((state: any) => state.authReducer);
    const appDispatch = useDispatch();
    const authDispatch = useDispatch();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        appDispatch(checkTheme());
        checkIfLoggedIn();
    }, [])

    const checkIfLoggedIn = () => {
        AsyncStorage.getItem('USER_LOGIN')
            .then((value) => {
                if (value) {
                    let data = JSON.parse(value);
                    authDispatch(checkUserLogin(data));
                } else {
                    authDispatch(checkUserLogin(null));
                }
            })
            .catch(() => {
                authDispatch(checkUserLogin(null));
            });
    };

    let CustomDefaultTheme = {
        ...PaperDefaultTheme,
        ...NavigationDefaultTheme,
        colors: {
            ...PaperDefaultTheme.colors,
            ...NavigationDefaultTheme.colors,
            accent: Colors.primary,
            primary: Colors.primary,
            card: 'rgb(255, 255, 255)',
            // background: '#ffffff',
            text: '#000000'
        }
    }

    let CustomDarkTheme = {
        ...PaperDarkTheme,
        ...NavigationDarkTheme,
        colors: {
            ...PaperDarkTheme.colors,
            ...NavigationDarkTheme.colors,
            accent: Colors.primary,
            primary: Colors.primary,
            card: 'rgb(18, 18, 18)',
            background: '#333333',
            text: '#ffffff'
        }
    }

    const HomeStack = () => {
        return (
            <Stack.Navigator screenOptions={{ ...HOME_STACK_OPTIONS, title: t('starterApp') }}>
                {/* 
                    //* react-native-reanimated Example in HomeScreen
                */}
                {/* <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} /> */}
                {/* 
                    //* react-native-reanimated with in scrollable header
                */}
                <Stack.Screen name={Route.WELCOME} component={HomeTabs} />
            </Stack.Navigator>
        )
    }

    const UsersListStack = () => {
        return (
            <UserStack.Navigator screenOptions={{ ...USERLIST_STACK_OPTIONS, title: t('users') }}>
                <UserStack.Screen name={Route.USERSCREEN} component={UsersScreen} />
            </UserStack.Navigator>
        )
    }

    const SettingScreenStack = () => {
        return (
            <SettingStack.Navigator screenOptions={{ ...USERLIST_STACK_OPTIONS, title: t('settings') }}>
                <SettingStack.Screen name={Route.SETTINGS} component={SettingsScreen} />
            </SettingStack.Navigator>
        )
    }

    if (authState?.isLoading) {
        return <LoadingView />;
    }

    return (
        <PaperProvider theme={data.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
            <AppStatusBar isDarkTheme={data.isDarkTheme} />
            <NavigationContainer
                ref={(navigatorRef: any) => {
                    setTopLevelNavigator(navigatorRef);
                }}
                theme={data.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
                {authState.userLoggedIn ? (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === Route.APPSTACK) {
                                    iconName = focused
                                        ? 'home'
                                        : 'home-outline';
                                } else if (route.name === Route.USERSCREEN) {
                                    iconName = focused ? 'person' : 'person-outline';
                                } else if (route.name === Route.SETTINGS) {
                                    iconName = focused ? 'ios-settings' : 'settings-outline';
                                }
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: Colors.primary,
                            inactiveTintColor: 'gray',
                        }}
                    >
                        <Tab.Screen name={Route.APPSTACK} component={HomeStack} options={{ title: t('home') }} />
                        <Tab.Screen name={Route.USERSCREEN} component={UsersListStack} options={{ title: t('users') }} />
                        <Tab.Screen name={Route.SETTINGS} component={SettingScreenStack} options={{ title: t('settings') }} />
                    </Tab.Navigator>
                ) : (
                    <AuthStackScreens />
                )}
            </NavigationContainer>
        </PaperProvider>
    );
}