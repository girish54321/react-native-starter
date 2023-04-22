import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "Config/Colors";

export const AppButton: FC<ButtonProps> = props => {
    const { mode, children, style, onPress, uppercase } = props;
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});