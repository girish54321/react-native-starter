import React, { FC } from "react";
import { Navigation } from "./navigation/mainNavigation";
import ReduxThunk from 'redux-thunk'
import { Provider, } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import {
    NativeModules
} from 'react-native';
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export const App: FC = () => {
    console.log("ssss");

    console.log(NativeModules);

    // NativeModules.RNConfigModule.goToReactNative()

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

