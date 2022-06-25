import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Home } from "newHome";
import counterReducer from "couterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export const App: FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/* <Navigation /> */}
                <Stack.Navigator>
                    <Stack.Screen name={"Home"} component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

