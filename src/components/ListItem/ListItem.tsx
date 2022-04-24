import React, { FC } from "react";
import * as Animatable from 'react-native-animatable';
import { List, Avatar, Divider } from 'react-native-paper';
export const ListItem: FC<any> = props => {
    const { style, name, email, image } = props;
    return (
        <Animatable.View animation="slideInDown" style={{ margin: 8, ...style }}>
            <List.Item
                title={name}
                description={email}
                left={props => <Avatar.Image  {...props} source={{ uri: image }} />}
            />
            <Divider />
        </Animatable.View>
    );
}