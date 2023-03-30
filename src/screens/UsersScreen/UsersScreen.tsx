import React, { useEffect } from "react";
import { StyleSheet, } from "react-native";
import { NavigationScreen } from "../../navigation/NavigationTypings";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getServiceResponse } from "../../redux/UserListStore/action";
import { UserList } from "../../models/responseType/UserListResponse";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";
import { Route } from "constants/Route";
import { USER_LIST_STATE_TYPE } from "redux/UserListStore/userListReducer";


export const UsersScreen: NavigationScreen<Route.WELCOME> = (props: any) => {
    const appDispatch = useDispatch();
    const data: USER_LIST_STATE_TYPE = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        appDispatch(getServiceResponse({ per_page: 20 }))
    }, [])

    return (
        <AppView>
            <ScrollView style={style.scrollView}>
                {data.users.map((value: UserList, index: number) => {
                    return (
                        <ListItem name={`${value.first_name} ${value.last_name}`} email={value.email}
                            key={String(index)}
                            image={value.avatar}
                            style={{}} />
                    )
                })}
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    }
});