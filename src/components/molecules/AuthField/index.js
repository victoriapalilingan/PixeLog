import React from 'react';
import {StyleSheet, View} from 'react-native';
import PixelText from '../../atoms/PixelText';
import PixelInput from '../../atoms/PixelInput';

const AuthField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <PixelText
        variant="pixel"
        style={{fontSize: 18, color: '#000', marginBottom: 6}}>
        {label}
      </PixelText>
      <PixelInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default AuthField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 6,
  },
});
