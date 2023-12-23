import React, { useEffect, useState } from "react";
import { StyleSheet, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppView } from "@components/Flex/Flex";
import { Avatar, Text } from "react-native-paper";
import { scale } from "Config/ScalingUtils";
import { UserList } from "models/responseType/UserListResponse";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

export const SelectedUserScreen = (props: any) => {
    const data: UserList = props?.route?.params?.data
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        props.navigation.setOptions({ title: `${data.first_name} ${data.last_name}` })
    }, [])

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
                <AutocompleteDropdown
                    clearOnFocus={false}
                    // closeOnBlur={true}
                    // ClearIconComponent={<Text></Text>}
                    inputHeight={50}
                    debounce={620}
                    inputContainerStyle={{ marginVertical: 16, backgroundColor: '#fff', height: 50 }}
                    closeOnSubmit={false}
                    initialValue={'3'} // or just '2'
                    onSelectItem={setSelectedItem}
                    dataSet={[
                        { id: '1', title: 'Alpha' },
                        { id: '2', title: 'Beta' },
                        { id: '3', title: 'Gamma' },
                    ]}
                />
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    }
});