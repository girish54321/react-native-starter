import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppView } from "@components/Flex/Flex";
import { scale } from "Config/ScalingUtils";
import { UserList } from "models/responseType/UserListResponse";

export const SelectedUserScreen = (props: any) => {
    const data: UserList = props?.route?.params?.data

    useEffect(() => {
        props.navigation.setOptions({ title: `${data.first_name} ${data.last_name}` })
    }, [])

    return (
        <AppView paddingRequired>
            <ScrollView style={style.scrollView}>
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center', height: scale(180)
                }}>
                    <Image style={style.image} source={{ uri: data.avatar }} />
                    <View style={style.textContainer}>
                        <Text style={style.name}>{data.first_name}</Text>
                        <Text style={style.email}>{data.email}</Text>
                    </View>
                </View>
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginBottom: 16,
    },
    textContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    email: {
        fontSize: 20,
        color: '#666',
    },
});