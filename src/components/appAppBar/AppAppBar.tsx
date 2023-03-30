import React from 'react'
import { Appbar } from 'react-native-paper';
export declare type AppAppBarType = {
    navigation: any,
    back?: any,
    title: any
};

export const CustomNavigationBar: React.FC<AppAppBarType> = ({ navigation, back, title }) => {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
}