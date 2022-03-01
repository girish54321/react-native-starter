import React, { FC } from "react";
import { Text, TextProps, View, } from "react-native";
import { List, Avatar, Divider } from 'react-native-paper';
export const ListItem: FC<any> = props => {
    const { style, name, email, image } = props;
    return (
        <View style={{ margin: 8 }}>
            <List.Item
                title={name}
                description={email}
                left={props => <Avatar.Image  {...props} source={{ uri: image }} />}
            />
            <Divider />
        </View>
    );
}