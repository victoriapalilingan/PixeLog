import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const IconButton = ({icon, onPress, size = 24, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Image source={icon} style={[styles.icon, {width: size, height: size}]} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
});
