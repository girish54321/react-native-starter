import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/App';

import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));
