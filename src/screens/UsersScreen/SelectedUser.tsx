import React, { useEffect } from "react";
import { StyleSheet, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppView } from "@components/Flex/Flex";
import { Avatar, Text } from "react-native-paper";
import { scale } from "Config/ScalingUtils";
import { UserList } from "models/responseType/UserListResponse";

export const SelectedUserScreen = (props: any) => {
    const data: UserList = props?.route?.params?.data

    useEffect(() => {
    }, [])

    return (
        <AppView paddingRequired>
            <ScrollView style={style.scrollView}>
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center', height: scale(160)
                }}>
                    <Avatar.Image size={scale(90)} source={{ uri: data?.avatar }} />
                    <Text variant="headlineLarge">{data.first_name} {data.last_name}</Text>
                    <Text variant="titleLarge">{data.email}</Text>
                </View>
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    }
});