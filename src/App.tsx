// import React, { FC } from "react";
// import { Navigation } from "./navigation/mainNavigation";
// import { Provider, } from 'react-redux'
// import { store } from './redux/rootReducer'

// export const App: FC = () => {
//     return (
//         <Provider store={store}>
//             <Navigation />
//         </Provider>
//     );
// }


import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import BottomSheet, { BottomSheetScrollView, BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { TextInput } from "react-native-paper";

export const App = () => {
    // hooks
    const sheetRef = useRef<BottomSheet>(null);

    // variables
    const data = useMemo(
        () =>
            Array(50)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        // sheetRef.current?.snapToIndex(index);
        sheetRef.current?.expand();
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    const renderItem = useCallback(
        (item) => (
            <View key={item} style={styles.itemContainer}>
                <TextInput style={styles.input} />
                <Text>{item}</Text>
            </View>
        ),
        []
    );
    return (
        <View style={styles.container}>
            <ScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9].map((data) => {
                    return (
                        <View style={{ margin: 8 }} >
                            <TextInput style={{ margin: 8 }} />
                            <Text onPress={() => {
                                sheetRef.current.expand()
                            }}>Open</Text>
                            <Text onPress={() => {
                                sheetRef.current.close()
                            }}>Close</Text>
                        </View>
                    )
                })}
            </ScrollView>
            {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} /> */}
            {/* <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
            {/* <Button title="Close" onPress={() => handleClosePress()} /> */}
            <BottomSheet
                ref={sheetRef}
                // index={1}
                // index={0}
                enablePanDownToClose={true}
                // snapPoints={snapPoints}
                enableDynamicSizing={true}
                onChange={handleSheetChange}
            >
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {data.map(renderItem)}
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 200,
    },
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
    input: {
        marginTop: 8,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
});
