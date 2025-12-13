import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const PixelInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  ...props
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#999999"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      {...props}
    />
  );
};

export default PixelInput;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 24,
    paddingHorizontal: 18,
    fontSize: 14,
    fontFamily: 'PixelifySans-Bold',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
});
