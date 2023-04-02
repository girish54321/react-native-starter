import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { TouchableOpacity } from "react-native";
// import { Button } from "react-native-paper";

export const AppButton: FC<ButtonProps> = props => {
    const { mode, children, style, onPress, uppercase } = props;
    return (
        // <Button uppercase={uppercase} onPress={onPress} mode={mode}
        //     style={[{ borderRadius: 4, padding: 4 }, style]}>
        //     {children}
        // </Button>
        <TouchableOpacity
            style={[{ borderRadius: 4, padding: 4 }, style]}>
            {children}
        </TouchableOpacity>
    );
}