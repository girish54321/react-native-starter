import { ScrollView } from "react-native-gesture-handler";
import { AppView } from "@components/Flex/Flex";
import { Avatar, Text } from "react-native-paper";
import { scale } from "Config/ScalingUtils";
import { UserList } from "models/responseType/UserListResponse";
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const SelectedUserScreen = (props: any) => {
    const data: UserList = props?.route?.params?.data

    useEffect(() => {
        props.navigation.setOptions({ title: `${data.first_name} ${data.last_name}` })
    }, [])


    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <AppView paddingRequired>
            <ScrollView style={style.scrollView}>
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center', height: scale(160),
                    marginTop: scale(14)
                }}>
                    <Avatar.Image size={scale(90)} source={{ uri: data?.avatar }} />
                    <Text variant="headlineLarge">{data.first_name} {data.last_name}</Text>
                    <Text variant="titleLarge">{data.email}</Text>
                </View>
            </ScrollView>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={style.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
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