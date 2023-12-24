import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { APP_STATE } from 'redux/appStore/AppReducers';

const AppLoaderModal = () => {
  const appState: APP_STATE = useSelector((state: any) => state.appReducers);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={appState.isLoading}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator animating={true} size={42} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 44,
    paddingVertical: 34,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default AppLoaderModal;
