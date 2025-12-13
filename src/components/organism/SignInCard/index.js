import React, {useEffect, useMemo, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

import PixelText from '../../atoms/PixelText';
import PixelButton from '../../atoms/PixelButton';
import AuthFooterLink from '../../molecules/AuthFooterLink';
import Star from '../../../assets/Star.png';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const toPx = value => {
  if (typeof value === 'number') return value;

  if (typeof value === 'string' && value.includes('%')) {
    const pct = parseFloat(value.replace('%', ''));
    if (!Number.isNaN(pct)) return (pct / 100) * SCREEN_HEIGHT;
  }

  return 0.55 * SCREEN_HEIGHT;
};

const SignInCard = ({
  subtitle,
  title,
  description,

  primaryButtonTitle,
  onPressPrimary,

  footerText,
  footerActionText,
  onPressFooter,

  loading = false,
  cardHeight = '55%',

  children,
}) => {
  const targetHeight = useMemo(() => toPx(cardHeight), [cardHeight]);

  // ✅ start height cuma dipakai sekali saat mount
  const initial = useRef(null);
  if (initial.current == null) {
    initial.current = targetHeight; // pertama kali sesuai mode awal
  }

  // OUTER height (JS thread)
  const animatedHeight = useRef(new Animated.Value(initial.current)).current;

  // INNER (native) - hanya untuk efek sheet naik halus
  const fade = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  // ✅ 1) Animasi masuk hanya sekali (opsional, mulus)
  useEffect(() => {
    fade.setValue(0);
    translateY.setValue(14);

    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 420,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ 2) Setiap targetHeight berubah (signIn <-> signUp), animasi dari height CURRENT ke target baru
  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: targetHeight,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // ✅ height wajib false
    }).start();
  }, [animatedHeight, targetHeight]);

  return (
    <Animated.View style={[styles.container, {height: animatedHeight}]}>
      <Animated.View
        style={[styles.inner, {opacity: fade, transform: [{translateY}]}]}>
        {/* Decorative */}
        <View style={styles.decorLayer} pointerEvents="none">
          <View style={[styles.decorBox, styles.decorTopRight]} />
          <View style={[styles.decorBox, styles.decorRightTall]} />
          <View style={[styles.decorBox, styles.decorLeftMid]} />
          <View style={[styles.decorBox, styles.decorBottomLeft]} />
        </View>

        <View style={styles.handle} />
        <Image source={Star} style={styles.starIcon} resizeMode="contain" />

        <View style={styles.header}>
          {!!subtitle && (
            <PixelText variant="pixel" weight="regular" style={styles.subtitle}>
              {subtitle}
            </PixelText>
          )}

          {!!title && (
            <PixelText variant="pixel" weight="bold" style={styles.title}>
              {title}
            </PixelText>
          )}

          {!!description && (
            <PixelText
              variant="montserrat"
              weight="regular"
              style={styles.description}>
              {description}
            </PixelText>
          )}
        </View>

        <View style={styles.formContainer}>{children}</View>

        <PixelButton
          title={primaryButtonTitle || 'Continue'}
          onPress={onPressPrimary}
          loading={loading}
          disabled={loading}
        />

        <AuthFooterLink
          text={footerText}
          actionText={footerActionText}
          onPress={onPressFooter}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default SignInCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000',

    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,

    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 28,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,

    overflow: 'hidden',
  },
  inner: {flex: 1},

  decorLayer: {...StyleSheet.absoluteFillObject},
  decorBox: {position: 'absolute', backgroundColor: '#96CAE8', opacity: 0.19},
  decorTopRight: {top: 20, right: 50, width: 48, height: 48},
  decorRightTall: {top: 0, right: 0, width: 72, height: 140},
  decorLeftMid: {top: 200, left: 0, width: 64, height: 72},
  decorBottomLeft: {bottom: 0, left: 20, width: 110, height: 60},

  handle: {
    width: 36,
    height: 4,
    backgroundColor: '#000',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
    zIndex: 2,
  },
  starIcon: {
    position: 'absolute',
    top: 52,
    right: 24,
    width: 35,
    height: 35,
    zIndex: 2,
  },

  header: {marginBottom: 18, zIndex: 2},
  subtitle: {fontSize: 14, color: '#000', marginBottom: 4},
  title: {fontSize: 22, color: '#000', marginBottom: 8},
  description: {fontSize: 11, lineHeight: 16, color: '#000', maxWidth: '90%'},

  formContainer: {marginBottom: 16, zIndex: 2},
});
