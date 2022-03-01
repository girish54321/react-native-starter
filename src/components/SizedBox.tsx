import React from 'react';
import { View } from 'react-native';

const SizedBox = ({ size, width }) => {
  return <View style={{ marginTop: size, marginHorizontal: width }} />;
};

export default SizedBox;
