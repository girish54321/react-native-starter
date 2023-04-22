import React, { FC } from "react";
import { View } from "react-native";
import { FlexProps } from "./FlexProps";
import { scale } from "Config/ScalingUtils";

export const Row: FC<FlexProps> = props => {
    const { reverse, alignItems, justifyContent, style, children, ...rest } = props;
    const direction = reverse ? 'row-reverse' : 'row';

    return (
        <View style={[style, { flexDirection: direction, alignItems, justifyContent }]} {...rest}>
            {children}
        </View>
    );
}

export const Column: FC<FlexProps> = props => {
    const { reverse, alignItems, justifyContent, style, children, ...rest } = props;
    const direction = reverse ? 'column-reverse' : 'column';

    return (
        <View style={[style, { flexDirection: direction, alignItems, justifyContent }]} {...rest}>
            {children}
        </View>
    );
}

export const AppView: FC<FlexProps> = props => {
    const { reverse, alignItems, justifyContent, style, children, paddingRequired, ...rest } = props;
    const direction = reverse ? 'column-reverse' : 'column';

    return (
        <View style={[style, {
            flexDirection: direction, alignItems,
            justifyContent, flex: 1, paddingHorizontal: paddingRequired ? scale(12) : 0
        }]} {...rest}>
            {children}
        </View>
    );
}