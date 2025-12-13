import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const THEME = {
  success: {
    bg: '#96CAE8', // soft pastel blue (dari gradient 61%)
    bgPressed: '#709FCB', // bg-blue-600
    border: '#1D4ED8', // border-blue-700
    text: '#FFFFFF',
  },
  info: {
    bg: '#06B6D4', // cyan-500
    bgPressed: '#0891B2', // cyan-600
    border: '#0E7490', // cyan-700
    text: '#FFFFFF',
  },
  warning: {
    bg: '#EAB308', // yellow-500
    bgPressed: '#CA8A04', // yellow-600
    border: '#A16207', // yellow-700
    text: '#FFFFFF',
  },
  error: {
    bg: '#EF4444', // red-500
    bgPressed: '#DC2626', // red-600
    border: '#B91C1C', // red-700
    text: '#FFFFFF',
  },
};

const Button = ({
  label = 'OKAY!',
  onPress,
  theme = 'success',

  width = 240,
  height = 56,

  // kalau mau override manual
  backgroundColor,
  borderColor,
  textColor,

  borderWidth = 4,
  radius = 12,
  fontSize = 18,

  disabled = false,
}) => {
  const [pressed, setPressed] = useState(false);

  const t = THEME[theme] || THEME.success;

  const bg = backgroundColor || (pressed ? t.bgPressed : t.bg);
  const br = borderColor || t.border;
  const tx = textColor || t.text;

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: bg,
          borderColor: br,
          borderWidth,
          borderRadius: radius,
          opacity: disabled ? 0.6 : 1,
          transform: [{scale: pressed ? 0.98 : 1}], // mirip active:scale-95
        },
      ]}>
      <Text
        style={[
          styles.label,
          {
            color: tx,
            fontSize,
          },
        ]}>
        {label}
      </Text>

      {/* optional: “pixel shadow” biar lebih keliatan tebel */}
      <View
        pointerEvents="none"
        style={[
          styles.innerShadowLine,
          {borderColor: br, borderBottomWidth: pressed ? 0 : 2},
        ]}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    // shadow-lg (kurang lebih)
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PixelifySans-Regular',
    // kalau mau sama persis pixel popup:
    // fontFamily: 'PressStart2P-Regular',
  },

  // garis tipis dalam (biar berasa “pixel border”)
  innerShadowLine: {
    position: 'absolute',
    left: 6,
    right: 6,
    bottom: 6,
    borderBottomColor: '#000',
  },
});
