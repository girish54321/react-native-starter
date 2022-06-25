// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text } from "react-native";
// import { AppView, Column } from "../../components/Flex/Flex";
// import { AppButton } from "@components/Button/Button";
// import '../../localization';
// import { useTranslation } from 'react-i18next';
// import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withSpring, withDelay, withRepeat, withSequence, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
// import { PanGestureHandler } from "react-native-gesture-handler";

// import DocumentScanner from "@woonivers/react-native-document-scanner"
// export const WelcomeScreen = (props: any) => {

//     const { t } = useTranslation();
//     const opacity = useSharedValue(.5)
//     const touchx = useSharedValue(0)
//     const touchY = useSharedValue(0)

//     const gestureHandler = useAnimatedGestureHandler({
//         onActive: (event) => {
//             touchx.value = event.translationX;
//             touchY.value = event.translationY;
//         },
//         onEnd: () => {
//             touchx.value = withSpring(0);
//             touchY.value = withSpring(0);
//         }
//     })

//     const scrollY = useSharedValue(0);


//     const scrollHandler = useAnimatedScrollHandler((event) => {
//         scrollY.value = event.contentOffset.y;
//     })

//     const animatedStyle = useAnimatedStyle(() => {
//         return {
//             opacity: opacity.value,
//             transform: [
//                 {
//                     scale: interpolate(
//                         opacity.value,
//                         [0.5, 1],
//                         [0.5, 1.2]
//                     )
//                 }
//                 // { translateX: touchx.value },
//                 // { translateY: touchY.value }
//             ]
//         }
//     })

//     useEffect(() => {
//         //* withTiming
//         opacity.value = withTiming(1, {
//             duration: 8000,
//         })

//         //* withSpring 
//         // opacity.value = withSpring(1)

//         //* withDelay
//         // opacity.value = withDelay(2000, withSpring(1))

//         //* withRepeat
//         // opacity.value = withRepeat(
//         //     withSpring(1),
//         //     -1,
//         //     true
//         // )

//         //* withSequence
//         // opacity.value = withSequence(
//         //     withSpring(1),
//         //     withSpring(0.5),
//         //     withSpring(1)
//         // )
//     }, [])



//     return (
//         <AppView>
//             {/* <Animated.ScrollView onScroll={scrollHandler}
//                 scrollEventThrottle={16}
//                 style={{
//                     height: '100%',
//                     width: '100%',
//                 }}
//                 contentContainerStyle={{
//                     height: '100%',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <PanGestureHandler onGestureEvent={gestureHandler}> */}
//             <Animated.View style={[{ flex: 1 }, animatedStyle]}>
//                 <Column alignItems="center" justifyContent="center" style={[style.container,]}>
//                     <Text>homePage NS: {t('homePage:welcome')}</Text>
//                     <Text>Default NS: {t('ok')}</Text>
//                     <AppButton
//                         onPress={() => {
//                             console.log("React Native");
//                         }}>
//                         <Text>React Native Starter</Text>
//                     </AppButton>
//                 </Column>
//             </Animated.View>
//             {/* </PanGestureHandler>
//             </Animated.ScrollView> */}
//         </AppView>
//     );
// }

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 15
//     }
// });

import React, { useRef, useState, useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from "react-native"
import Permissions from 'react-native-permissions';
import PDFScanner from "@woonivers/react-native-document-scanner"

export const WelcomeScreen = (props: any) => {
    const pdfScannerElement = useRef(null)
    const [data, setData] = useState({})
    const [allowed, setAllowed] = useState(false)

    useEffect(() => {
        async function requestCamera() {
            const result = await Permissions.request(Platform.OS === "android" ? "android.permission.CAMERA" : "ios.permission.CAMERA")
            if (result === "granted") setAllowed(true)
        }
        requestCamera()
    }, [])

    function handleOnPressRetry() {
        setData({})
    }
    function handleOnPress() {
        pdfScannerElement.current.capture()
    }
    if (!allowed) {
        console.log("You must accept camera permission")
        return (<View style={styles.permissions}>
            <Text>You must accept camera permission</Text>
        </View>)
    }
    if (data.croppedImage) {
        console.log("data", data)
        return (
            <React.Fragment>
                <Image source={{ uri: data.croppedImage }} style={styles.preview} />
                <TouchableOpacity onPress={handleOnPressRetry} style={styles.button}>
                    <Text style={styles.buttonText}>Retry</Text>
                </TouchableOpacity>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <PDFScanner
                ref={pdfScannerElement}
                style={styles.scanner}
                onPictureTaken={setData}
                overlayColor="rgba(255,130,0, 0.7)"
                enableTorch={false}
                quality={0.5}
                detectionCountBeforeCapture={5}
                detectionRefreshRateInMS={50}
            />
            <TouchableOpacity onPress={handleOnPress} style={styles.button}>
                <Text style={styles.buttonText}>Take picture</Text>
            </TouchableOpacity>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    scanner: {
        flex: 1,
    },
    button: {
        alignSelf: "center",
        position: "absolute",
        bottom: 32,
    },
    buttonText: {
        backgroundColor: "rgba(245, 252, 255, 0.7)",
        fontSize: 32,
    },
    preview: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
    },
    permissions: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})