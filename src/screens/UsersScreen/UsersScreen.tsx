import React, { useEffect } from "react";
import { FlatList, GestureResponderEvent, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getServiceResponse } from "../../redux/UserListStore/action";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";
import { Route } from "constants/Route";
import { USER_LIST_STATE_TYPE } from "redux/UserListStore/userListReducer";
import { navigate } from "@navigation/NavigationService";

export const UsersScreen = (_props: any) => {
    const appDispatch = useDispatch();
    const data: USER_LIST_STATE_TYPE = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        appDispatch(getServiceResponse({ per_page: 20 }))
    }, [])

    return (
        <AppView>
            <FlatList
                data={data?.users}
                keyExtractor={(item: any,) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem name={`${item.first_name} ${item.last_name}`} email={item.email}
                            key={String(1)}
                            image={item.avatar}
                            onPress={function (_e: GestureResponderEvent): void {
                                navigate(Route.SELECTEDUSERSCREEN, { data: item });
                            }} />
                    )
                }}
            />
        </AppView>
    );
}
