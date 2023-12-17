import React, { FC, useEffect, } from 'react';
import { DARK_THEME_TYPE } from 'redux/themeStore/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import {
    Provider as PaperProvider,
    MD3LightTheme as PaperDefaultTheme,
    MD3DarkTheme as PaperDarkTheme
} from 'react-native-paper'
import { APP_CONST, Colors } from '../Config/Colors'
import AppStatusBar from '@components/appStatusBar/appStatusBar';
import { authSlice } from 'redux/authStore/authReducers';
import AsyncStorage from '@react-native-community/async-storage';
import { setTopLevelNavigator } from './NavigationService';
import { AppBottomTab } from './appNavigation/AppNavigation';
import AuthStackScreens from './authStack/AuthStackScreens';
import { checkTheme } from 'redux/themeStore/action';
import LoadingView from '@components/loadingView';

export const Navigation: FC = () => {
    const data: DARK_THEME_TYPE = useSelector((state: any) => state.themeReducer);
    const authState = useSelector((state: any) => state.authReducer);
    const authDispatch = useDispatch();
    console.log("authState3", authState);

    useEffect(() => {
        authDispatch(checkTheme());
        checkIfLoggedIn();
    }, [])

    const checkIfLoggedIn = () => {
        AsyncStorage.getItem(APP_CONST.USER_LOGIN)
            .then((value) => {
                if (value) {
                    let data = JSON.parse(value);
                    authDispatch(authSlice.actions.checkUserLoginAction(data));
                } else {
                    authDispatch(authSlice.actions.checkUserLoginAction(null));
                }
            })
            .catch(() => {
                authDispatch(authSlice.actions.checkUserLoginAction(null));
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
            background: '#000000',
            text: '#ffffff'
        }
    }

    if (authState.isLoading) {
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
                    <AppBottomTab />
                ) : (
                    <AuthStackScreens />
                )}
            </NavigationContainer>
        </PaperProvider>
    );
}