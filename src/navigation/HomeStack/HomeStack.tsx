import { CustomNavigationBar } from "@components/appAppBar/AppAppBar";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "@screens/welcome/WelcomeScreen";
import { Route } from "constants/Route";
import React from "react"
import { useTranslation } from "react-i18next";

const HomeStack = createStackNavigator();

export const HomeScreenStack = () => {
    const { t } = useTranslation();

    return (
        <HomeStack.Navigator
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} title={t('starterApp')} />,
            }}
        // screenOptions={{ ...HOME_STACK_OPTIONS, title: t('starterApp') }}
        >
            {/* 
                //* react-native-reanimated Example in HomeScreen
            */}
            <HomeStack.Screen name={Route.WELCOME} component={WelcomeScreen} />
            {/* 
                //* react-native-reanimated with in scrollable header
            */}
            {/* <Stack.Screen name={Route.WELCOME} component={HomeTabs} /> */}
        </HomeStack.Navigator>
    )
}
