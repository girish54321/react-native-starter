import React, { useEffect } from "react";
import { StyleSheet, } from "react-native";
import { NavigationScreen } from "../../navigation/NavigationTypings";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { userListState } from "../../redux/UserListStore/userListReducer";
import { setUserData } from "../../redux/UserListStore/action";
import { UserList } from "../../models/responseType/UserListResponse";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";
import { Route } from "constants/Route";


export const UsersScreen: NavigationScreen<Route.WELCOME> = (props: any) => {
    const appDispatch = useDispatch();
    const data: userListState = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        appDispatch(setUserData())
    }, [])

    return (
        <AppView>
            <ScrollView style={style.scrollView}>
                {data.users.map((value: UserList, index: number) => {
                    return (
                        <ListItem name={value.name} email={value.email}
                            image={"https://www.w3schools.com/w3images/avatar2.png"} />
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