import React from "react";
import { StyleSheet, Text } from "react-native";
import { AppView, Column } from "../../components/Flex/Flex";
import { AppButton } from "@components/Button/Button";
import '../../localization';
import { useTranslation } from 'react-i18next';
export const WelcomeScreen = (props: any) => {
    const { t } = useTranslation();
    return (
        <AppView>
            <Column alignItems="center" justifyContent="center" style={[style.container,]}>
                <Text>homePage NS: {t('homePage:welcome')}</Text>
                <Text>Default NS: {t('ok')}</Text>
                <AppButton
                    onPress={() => {
                        console.log("React Native");
                    }}>
                    <Text>React Native Starter</Text>
                </AppButton>
            </Column>
        </AppView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});