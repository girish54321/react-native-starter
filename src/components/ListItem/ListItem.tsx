import React from "react";
import { GestureResponderEvent } from "react-native";
import * as Animatable from 'react-native-animatable';
import { List, Avatar, Divider } from 'react-native-paper';

interface listItemProps {
    name: string,
    email: string
    style?: any,
    image: string
    onPress: (e: GestureResponderEvent) => void;
}

export const ListItem = (props: listItemProps) => {
    const { style, name, email, image, onPress } = props;
    return (
        <Animatable.View animation="slideInDown" style={{ ...style }}>
            <List.Item
                onPress={onPress}
                title={name}
                description={email}
                left={props => <Avatar.Image  {...props} source={{ uri: image }} />}
            />
            <Divider />
        </Animatable.View>
    );
}