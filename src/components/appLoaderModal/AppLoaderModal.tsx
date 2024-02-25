import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { create } from 'zustand';

export const useAppLoaderStore = create((set) => ({
  isLoading: false,
  showLoader: () => set((state) => ({ isLoading: true })),
  hideLoader: () => set((state) => ({ isLoading: false })),
}))


const AppLoaderModal = () => {
  const isLoading = useAppLoaderStore((state) => state.isLoading)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isLoading}
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
