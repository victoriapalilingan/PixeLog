import React from 'react';
import {Text, StyleSheet} from 'react-native';

// variant: 'pixel' | 'montserrat'
// weight: 'regular' | 'bold'
const PixelText = ({
  variant = 'pixel',
  weight = 'regular',
  style,
  children,
  ...rest
}) => {
  const fontStyle = FONT_MAP?.[variant]?.[weight] || FONT_MAP.pixel.regular;

  return (
    <Text
      {...rest}
      style={[
        styles.base,
        fontStyle,
        style, // ✅ fontSize/warna/spacing diatur saat pemakaian
      ]}>
      {children}
    </Text>
  );
};

export default PixelText;

const FONT_MAP = {
  pixel: {
    regular: {fontFamily: 'PixelifySans-Regular'},
    bold: {fontFamily: 'PixelifySans-Bold'},
  },
  montserrat: {
    regular: {fontFamily: 'MontserratAlternates-Regular'},
    bold: {fontFamily: 'MontserratAlternates-Bold'},
  },
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false, // Android
    textAlignVertical: 'center',
  },
});
