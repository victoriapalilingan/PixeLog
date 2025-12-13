import React from 'react';
import {Text, StyleSheet} from 'react-native';

const PixelText = ({children, style}) => {
  return <Text style={[styles.base, style]}>{children}</Text>;
};

export default PixelText;

const styles = StyleSheet.create({
  base: {
    fontFamily: 'PixelifySans-Bold',
  },
});
