import React, { useEffect } from "react";
import { FlatList, GestureResponderEvent, Text, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getServiceResponse } from "../../redux/UserListStore/action";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";
import { Route } from "constants/Route";
import { USER_LIST_STATE_TYPE } from "redux/UserListStore/userListReducer";
import { navigate } from "@navigation/NavigationService";

import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { TextInput } from "react-native-paper";
import useDebounce from "Config/useDebounce";

const GET_BUSINESSES = gql`
  query MyQuery($location: String!, $limit: Int!) {
    search(location: $location, limit: $limit) {
      business {
        name
        phone
        photos
        price
      }
    }
  }
`;
const SEARCH_BUSINESS_BY_NAME = gql`
  query SearchBusinessByName($name: String!, $location: String!, $limit: Int!) {
    search(term: $name, location: $location, limit: $limit) {
      business {
        name
        phone
        photos
        price
      }
    }
  }
`;
export const UsersScreen = (_props: any) => {
    // const name = "Lily"; // Replace with the actual restaurant name
    const location = "San Francisco";
    const limit = 2;
    const [text, setText] = React.useState("Lily");

    const { loading, error, data, refetch } = useQuery(SEARCH_BUSINESS_BY_NAME, {
        variables: { name: text, location, limit },
    });

    const handleSearch = useDebounce((term: string) => {
        // Perform search operation with the debounced term
        console.log('Searching for:', term);
        refetch()
    }, 800);

    // if (loading) {
    //     return (
    //         <AppView>
    //             <Text>Loading</Text>
    //         </AppView>
    //     )
    // }
    return (
        <AppView>
            <TextInput
                label="Email"
                value={text}
                style={{ margin: 12 }}
                onChangeText={text => {
                    handleSearch(text)
                    setText(text)
                }}
            />
            <FlatList
                data={data?.search?.business}
                // numColumns={2}
                // keyExtractor={(item: any,) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem name={`${item.name}`} email={item.name}
                            key={String(1)}
                            image={item.photos[0]}
                            onPress={function (_e: GestureResponderEvent): void {
                                navigate(Route.SELECTED_USER_SCREEN, { data: item });
                            }} />
                    )
                }}
            />
        </AppView>

    );
    const appDispatch = useDispatch();
    const data1: USER_LIST_STATE_TYPE = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        appDispatch(getServiceResponse({ per_page: 20 }))
    }, [])

    return (
        <AppView>
            <FlatList
                data={data1?.users}
                keyExtractor={(item: any,) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem name={`${item.first_name} ${item.last_name}`} email={item.email}
                            key={String(1)}
                            image={item.avatar}
                            onPress={function (_e: GestureResponderEvent): void {
                                navigate(Route.SELECTED_USER_SCREEN, { data: item });
                            }} />
                    )
                }}
            />
        </AppView>
    );
}

