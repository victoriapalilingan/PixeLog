import React from 'react';
import {Image, StyleSheet} from 'react-native';

const PixelIcon = ({source, size = 24, style}) => {
  return (
    <Image
      source={source}
      style={[styles.icon, {width: size, height: size}, style]}
    />
  );
};

export default PixelIcon;

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
});
