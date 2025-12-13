import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../PixelText';

const PixelButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  return (
    <View style={[styles.wrapper, style]}>
      {/* Shadow block (hitam) */}
      <View style={styles.shadowBlock} />

      {/* Main button */}
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.85}
        style={[styles.button, isDisabled && styles.buttonDisabled]}>
        <LinearGradient
          colors={['#A9D9EF', '#8FC7E3']} // gradient halus seperti gambar
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.fill}>
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <PixelText
              variant="pixel"
              weight="bold"
              style={[styles.buttonText, textStyle]}>
              {title}
            </PixelText>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PixelButton;

const RADIUS = 18;
const SHADOW_OFFSET = 2;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 51,
    position: 'relative',
  },

  // layer hitam di belakang (shadow tegas)
  shadowBlock: {
    position: 'absolute',
    left: SHADOW_OFFSET,
    top: SHADOW_OFFSET,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    borderRadius: RADIUS,
  },

  // tombol utama dengan stroke hitam
  button: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: SHADOW_OFFSET,
    bottom: SHADOW_OFFSET,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: RADIUS,
    overflow: 'hidden',
  },

  // isi gradient
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    opacity: 0.65,
  },

  buttonText: {
    fontSize: 25, // mirip screenshot
    color: '#000',
    letterSpacing: 1,
  },
});
