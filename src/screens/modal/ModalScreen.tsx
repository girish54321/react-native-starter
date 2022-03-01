import Close from '@assets/icons/close.svg';
import { Button } from '@components/Button/Button';
import { Column, Row } from "@components/Flex/Flex";
import { Themed } from "@components/Themed/Themed";
import React from "react";
import { StyleSheet } from "react-native";
import { ModalScreenProps } from './ModalScreenProps';

export const ModalScreen = (props: ModalScreenProps) => {
    const { navigation, route, onClose } = props;

    const dimiss = () => {
        navigation.goBack();
        route.params.onClose?.();
    }

    return (
        <Column alignItems='center' justifyContent='center' style={style.background}>
            <Themed.View style={style.modal}>
                <Row alignItems='center' justifyContent='flex-end' style={style.controls}>
                    <Button effect='opacity' onPress={dimiss}>
                        <Close width={12} height={12} />
                    </Button>
                </Row>

                <Column alignItems='center' justifyContent='center' style={style.body}>
                    {route.params.builder?.()}
                </Column>
            </Themed.View>
        </Column>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1
    },
    modal: {
        borderRadius: 8,
        width: '80%',
        minHeight: 200
    },
    controls: {
        padding: 10
    },
    body: {
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 20
    }
});