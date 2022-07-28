import { Alert } from "react-native";
import RNRestart from 'react-native-restart';
// import { hideLoader, showAlert } from "../../action/AppActions";

export function handleApiError(error: any, appDispatch: any) {
    // appDispatch(hideLoader());
    // isDisplayError(error.message) && appDispatch(showAlert(error.message));
}

function isDisplayError(message: string) {
    switch (message) {
        case "Nothing to display":
            return false;
        case "Unauthorized":
            return false;
        case "403":
            return false;
        case "":
            return false;
        default:
            return true;
    }
}

export const exceptionHandler = (error: any, isFatal: boolean) => {
    if (isFatal) {
        Alert.alert(
            'Our dev team is working on this',
            " We will need to restart the app."
            ,
            [{
                text: 'Restart',
                onPress: () => {
                    RNRestart.Restart();
                }
            }],
            { cancelable: false },
        );
    } else if (error !== undefined) {
        console.log(JSON.stringify(error));
    }
};


export const nativeExceptionHandler = (exceptionString: string) => {
    RNRestart.Restart();
};
