import React, { FC } from "react";
import { Navigation } from "./navigation/mainNavigation";
import { Provider, } from 'react-redux'
import { store } from './redux/rootReducer'

export const App: FC = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

