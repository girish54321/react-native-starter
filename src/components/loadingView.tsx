import { Colors } from 'Config/Colors';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingView = () => {
  return (
    <View style={style.manView} >
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const style = StyleSheet.create({
  manView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default LoadingView;
