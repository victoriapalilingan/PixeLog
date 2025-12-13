import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, Easing, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import SplashBranding from '../../components/organism/SplashBranding';

import PixeLogLogo from '../../assets/PixeLogLogo.png';

const {height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const translateYAnim = useRef(new Animated.Value(height * 0.2)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const loadingBarOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -20,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(translateYAnim, {
          toValue: 0,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(350),
        Animated.timing(loadingBarOpacity, {
          toValue: 1,
          duration: 350,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // ✅ pindah ke SignIn (biar Splash ga bisa balik)
    const timer = setTimeout(() => {
      navigation.replace('Auth', {mode: 'signIn'});
    }, 1800);

    return () => clearTimeout(timer);
  }, [
    navigation,
    translateYAnim,
    scaleAnim,
    opacityAnim,
    rotateAnim,
    loadingBarOpacity,
  ]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-5deg', '0deg'],
  });

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
      <CheckerboardBackground />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: opacityAnim,
            transform: [
              {translateY: translateYAnim},
              {scale: scaleAnim},
              {rotate},
            ],
          },
        ]}>
        <SplashBranding
          logoSource={PixeLogLogo}
          loadingOpacity={loadingBarOpacity}
          loadingMarginTop={0}
        />
      </Animated.View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  content: {alignItems: 'center', paddingBottom: 60},
});
