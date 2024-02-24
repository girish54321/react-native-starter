import React, { useEffect } from "react";
import { FlatList, GestureResponderEvent, } from "react-native";
import { useUserListService } from "../../redux/UserListStore/action";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";
import { Route } from "constants/Route";
import { useUserListStore } from "redux/UserListStore/userListReducer";
import { navigate } from "@navigation/NavigationService";

export const UsersScreen = (_props: any) => {
    const data = useUserListStore((state) => state.users)
    const selectUserAction = useUserListStore((state) => state.selectUserAction)
    const { getServiceResponse } = useUserListService()

    useEffect(() => {
        getServiceResponse({ per_page: 20 })
    }, [])

    return (
        <AppView>
            <FlatList
                data={data}
                keyExtractor={(item: any,) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem name={`${item.first_name} ${item.last_name}`} email={item.email}
                            key={String(1)}
                            image={item.avatar}
                            onPress={function (_e: GestureResponderEvent): void {
                                selectUserAction(item)
                                navigate(Route.SELECTEDUSERSCREEN);
                            }} />
                    )
                }}
            />
        </AppView>
    );
}
