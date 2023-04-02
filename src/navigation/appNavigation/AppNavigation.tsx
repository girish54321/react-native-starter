import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route } from 'constants/Route';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreenStack } from '@navigation/HomeStack/HomeStack';
import { UsersListStack } from '@navigation/UsersListStack/UsersListStack';
import { SettingScreenStack } from '@navigation/SettingScreenStack/SettingScreenStack';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export const AppBottomTab = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name={Route.APPSTACK} component={HomeScreenStack}
                options={{
                    tabBarLabel: t('home'),
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen name={Route.USERSCREEN} component={UsersListStack}
                options={{
                    tabBarLabel: t('users'),
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen name={Route.SETTINGS} component={SettingScreenStack}
                options={{
                    tabBarLabel: t('settings'),
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="ios-settings" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    )
}