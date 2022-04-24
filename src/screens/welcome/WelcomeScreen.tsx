import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { AppView, Column } from "../../components/Flex/Flex";
import { AppButton } from "@components/Button/Button";
import '../../localization';
import { useTranslation } from 'react-i18next';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withSpring, withDelay, withRepeat, withSequence, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

export const WelcomeScreen = (props: any) => {

    const { t } = useTranslation();
    const opacity = useSharedValue(.5)
    const touchx = useSharedValue(0)
    const touchY = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            touchx.value = event.translationX;
            touchY.value = event.translationY;
        },
        onEnd: () => {
            touchx.value = withSpring(0);
            touchY.value = withSpring(0);
        }
    })

    const scrollY = useSharedValue(0);


    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                {
                    scale: interpolate(
                        opacity.value,
                        [0.5, 1],
                        [0.5, 1.2]
                    )
                }
                // { translateX: touchx.value },
                // { translateY: touchY.value }
            ]
        }
    })

    useEffect(() => {
        //* withTiming
        opacity.value = withTiming(1, {
            duration: 8000,
        })

        //* withSpring 
        // opacity.value = withSpring(1)

        //* withDelay
        // opacity.value = withDelay(2000, withSpring(1))

        //* withRepeat
        // opacity.value = withRepeat(
        //     withSpring(1),
        //     -1,
        //     true
        // )

        //* withSequence
        // opacity.value = withSequence(
        //     withSpring(1),
        //     withSpring(0.5),
        //     withSpring(1)
        // )
    }, [])



    return (
        <AppView>
            {/* <Animated.ScrollView onScroll={scrollHandler}
                scrollEventThrottle={16}
                style={{
                    height: '100%',
                    width: '100%',
                }}
                contentContainerStyle={{
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <PanGestureHandler onGestureEvent={gestureHandler}> */}
            <Animated.View style={[{ flex: 1 }, animatedStyle]}>
                <Column alignItems="center" justifyContent="center" style={[style.container,]}>
                    <Text>homePage NS: {t('homePage:welcome')}</Text>
                    <Text>Default NS: {t('ok')}</Text>
                    <AppButton
                        onPress={() => {
                            console.log("React Native");
                        }}>
                        <Text>React Native Starter</Text>
                    </AppButton>
                </Column>
            </Animated.View>
            {/* </PanGestureHandler>
            </Animated.ScrollView> */}
        </AppView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});