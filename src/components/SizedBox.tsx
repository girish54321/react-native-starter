import React from 'react';
import { View } from 'react-native';

const SizedBox = ({ size, width }) => <View style={{ marginTop: size, marginHorizontal: width }} />;

export default SizedBox;
