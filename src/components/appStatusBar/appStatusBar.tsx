
import { Colors } from 'Config/Colors'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
interface AppStatusBarType {
    isDarkTheme: boolean,
}
export default function AppStatusBar(props: AppStatusBarType) {
    const { isDarkTheme } = props;
    return (
        <StatusBar
            barStyle={Platform.OS === "android" ? "light-content" : isDarkTheme ? "light-content" : "dark-content"} hidden={false}
            translucent={true}
            backgroundColor={isDarkTheme ? "#000000" : Colors.primary} />
    )
}
