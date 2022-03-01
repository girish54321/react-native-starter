import { CommonActions, DrawerActions } from '@react-navigation/native';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}


function navigate(routeName: string, params?: any) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        })
    );
}

function openDrawer() {
    _navigator.dispatch(DrawerActions.toggleDrawer());
}

function goBack() {
    _navigator.dispatch(
        CommonActions.goBack()
    );
}


async function navigateResetStack(routeName: string, params?: any) {
    _navigator.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
    }));
}


export {
    navigate,
    setTopLevelNavigator,
    navigateResetStack,
    goBack,
    openDrawer,
};