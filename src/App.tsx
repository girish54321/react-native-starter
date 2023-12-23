import React, { FC } from "react";
import { Navigation } from "./navigation/mainNavigation";
import { Provider, } from 'react-redux'
import { store } from './redux/rootReducer'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.yelp.com/v3/graphql',
});


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = "Bearer xokpmsII-SRGdzyMYeAKalnUd_Uj2P-yMu554ZiaATeFKhFmZ7a5KHmBtGZMkjumRFeb3OeTgRXXm2XBQcTr_eHwgEOFtQZIZE805mu0SoldGBtyxA0rfo5iaZpKXXYx"
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token
        }
    }
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()

});

export const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Navigation />
            </Provider>
        </ApolloProvider>
    );
}

