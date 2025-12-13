import React from 'react';
import {StyleSheet, Image, Animated, Dimensions, View} from 'react-native';
import PixelLoadingBar from '../../molecules/PixelLoadingBar';

const {width} = Dimensions.get('window');

const SplashBranding = ({
  logoSource,
  loadingOpacity,
  loadingMarginTop = 0, // makin kecil = makin nempel
}) => {
  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} resizeMode="contain" />

      <Animated.View
        style={[
          styles.loadingWrapper,
          {opacity: loadingOpacity, marginTop: loadingMarginTop},
        ]}>
        <PixelLoadingBar />
      </Animated.View>
    </View>
  );
};

export default SplashBranding;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: width > 600 ? 500 : 350,
    height: width > 600 ? 500 : 350,
  },
  loadingWrapper: {
    // default spacing, bisa ditimpa via prop loadingMarginTop
    marginTop: 4,
  },
});
