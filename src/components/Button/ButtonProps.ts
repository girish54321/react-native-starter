import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
    mode?: 'text' | 'outlined' | 'contained';
    style?: StyleProp<ViewStyle> | undefined,
    children: any,
    onPress: any,
    uppercase?: boolean,
}