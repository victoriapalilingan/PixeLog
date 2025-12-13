import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Defs, Pattern, Rect} from 'react-native-svg';

const CheckerboardPattern = () => {
  const cell = 54;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern
            id="checker"
            width={cell * 2}
            height={cell * 2}
            patternUnits="userSpaceOnUse">
            <Rect
              x="0"
              y="0"
              width={cell}
              height={cell}
              fill="#96CAE8"
              opacity={0.19}
            />
            <Rect
              x={cell}
              y="0"
              width={cell}
              height={cell}
              fill="transparent"
            />
            <Rect
              x="0"
              y={cell}
              width={cell}
              height={cell}
              fill="transparent"
            />
            <Rect
              x={cell}
              y={cell}
              width={cell}
              height={cell}
              fill="#96CAE8"
              opacity={0.19}
            />
          </Pattern>
        </Defs>

        <Rect width="100%" height="100%" fill="url(#checker)" />
      </Svg>
    </View>
  );
};

const CheckerboardBackground = ({children}) => {
  return (
    <LinearGradient
      colors={[
        '#E5F9FF',
        '#D5F2FA',
        '#C5EBF5',
        '#B5E4F0',
        '#A5DDEB',
        '#96CAE8',
        '#8BC3E6',
        '#81BCE4',
        '#77B5E2',
        '#6DAEE0',
        '#63A7CE',
        '#5A9FCC',
        '#5298CA',
        '#4A91C8',
        '#547CAF',
      ]}
      locations={[
        0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.54, 0.6, 0.66, 0.72, 0.78, 0.84,
        0.9, 1,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <CheckerboardPattern />

      {/* ✅ optional: kalau mau background ini jadi wrapper */}
      {children}
    </LinearGradient>
  );
};

export default CheckerboardBackground;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
