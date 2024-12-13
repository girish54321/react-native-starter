import { ScrollView } from "react-native-gesture-handler";
import { AppView } from "@components/Flex/Flex";
import { Avatar, Text } from "react-native-paper";
import { scale } from "Config/ScalingUtils";
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useUserListStore } from "redux/UserListStore/userListReducer";

export const SelectedUserScreen = (props: any) => {
    const { selected } = useUserListStore((state) => state.userListStore)

    useEffect(() => {
        props.navigation.setOptions({ title: `${selected?.first_name} ${selected?.last_name}` })
    }, [])

    return (
        <AppView paddingRequired>
            <ScrollView style={style.scrollView}>
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center', height: scale(160),
                    marginTop: scale(14)
                }}>
                    <Avatar.Image size={scale(90)} source={{ uri: selected?.avatar }} />
                    <Text variant="headlineLarge">{selected?.first_name} {selected?.last_name}</Text>
                    <Text variant="titleLarge">{selected?.email}</Text>
                </View>
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});