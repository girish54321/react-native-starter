import React, { FC } from "react";
import { Navigation } from "./navigation/mainNavigation";
import ReduxThunk from 'redux-thunk'
import { Provider, } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/rootReducer'
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export const App: FC = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

