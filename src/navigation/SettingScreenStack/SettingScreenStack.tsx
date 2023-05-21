import { CustomNavigationBar } from "@components/appAppBar/AppAppBar";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "@screens/SettingsScreen/SettingsScreen";
import { Route } from "constants/Route";
import React from "react"
import { useTranslation } from "react-i18next";

const SettingStack = createStackNavigator();
export const SettingScreenStack = () => {
    const { t } = useTranslation();
    return (
        <SettingStack.Navigator
            screenOptions={{
                title: t('settings'),
                header: (props) => <CustomNavigationBar  {...props} />,
            }}
        >
            <SettingStack.Screen name={Route.SETTINGS} component={SettingsScreen} />
        </SettingStack.Navigator>
    )
}