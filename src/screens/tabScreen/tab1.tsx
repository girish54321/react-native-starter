import * as React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListItem } from '@components/ListItem/ListItem';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, useAnimatedScrollHandler, Extrapolate } from "react-native-reanimated";
const Tab = createMaterialTopTabNavigator();


export const TabViewApp = () => {
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        console.log(event);

        scrollY.value = event.contentOffset.y;
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: 'red',
            height: interpolate(
                scrollY.value,
                [20, 250],
                [280, 0],
                {
                    extrapolateLeft: Extrapolate.CLAMP
                }
            ),
            transform: [
                {
                    translateY: interpolate(
                        scrollY.value,
                        [20, 250],
                        [1, -100]),
                }
            ]
        }
    })


    function HomeScreen() {
        return (
            <View style={{ flex: 1, }}>
                <Animated.FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1,]}
                    onScroll={scrollHandler}
                    scrollEventThrottle={18}
                    renderItem={(item, index) => {
                        return <ListItem name={'Girish'} email={'name@gmail.com'} />
                    }} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={animatedStyle} >
                <View style={{ backgroundColor: 'pink', flex: 1, }}></View>
            </Animated.View>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={HomeScreen} />
            </Tab.Navigator>
        </View>

    );
}