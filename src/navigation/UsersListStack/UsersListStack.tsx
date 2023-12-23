import { CustomNavigationBar } from "@components/appAppBar/AppAppBar";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectedUserScreen } from "@screens/UsersScreen/SelectedUser";
import { UsersScreen } from "@screens/UsersScreen/UsersScreen";
import { Route } from "constants/Route";
import React from "react"
import { useTranslation } from "react-i18next";

const UserStack = createStackNavigator();

export const UsersListStack = () => {
    const { t } = useTranslation();
    return (
        <UserStack.Navigator
            screenOptions={{
                title: t('users'),
                header: (props) => <CustomNavigationBar {...props} />,
            }}
        >
            <UserStack.Screen name={Route.USER_SCREEN} component={UsersScreen} />
            <UserStack.Screen name={Route.SELECTED_USER_SCREEN} component={SelectedUserScreen} />
        </UserStack.Navigator>
    )
}
