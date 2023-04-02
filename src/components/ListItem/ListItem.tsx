import React from "react";
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
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
            <TouchableOpacity onPress={onPress}
                style={styles.item}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    );
}


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
});
