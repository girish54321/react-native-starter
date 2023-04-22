import { FlexAlignType, ViewProps } from "react-native";

export interface FlexProps extends ViewProps {

    reverse? : boolean;
    alignItems? : FlexAlignType;
    justifyContent? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    paddingRequired?: boolean
}