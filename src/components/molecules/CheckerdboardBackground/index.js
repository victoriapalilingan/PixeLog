import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Defs, Pattern, Rect} from 'react-native-svg';

const CheckerboardBackground = ({cell = 54}) => {
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

export default CheckerboardBackground;
