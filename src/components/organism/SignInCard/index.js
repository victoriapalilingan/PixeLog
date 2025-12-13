import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PixelText from '../../atoms/PixelText';
import PixelButton from '../../atoms/PixelButton';
import AuthFooterLink from '../../molecules/AuthFooterLink';
import Star from '../../../assets/Star.png';

const SignInCard = ({
  /* ===== Layout ===== */
  cardHeight = '55%',

  /* ===== Header ===== */
  subtitle,
  title,
  description,

  /* ===== Button ===== */
  primaryButtonTitle,
  onPressPrimary,
  loading = false,

  /* ===== Footer ===== */
  footerText,
  footerActionText,
  onPressFooter,

  /* ===== Slot ===== */
  children,
}) => {
  return (
    <View style={[styles.container, {minHeight: cardHeight}]}>
      {/* Decorative */}
      <View style={styles.decorLayer} pointerEvents="none">
        <View style={[styles.decorBox, styles.decorTopRight]} />
        <View style={[styles.decorBox, styles.decorRightTall]} />
        <View style={[styles.decorBox, styles.decorLeftMid]} />
        <View style={[styles.decorBox, styles.decorBottomLeft]} />
      </View>

      {/* Handle */}
      <View style={styles.handle} />

      {/* Star */}
      <Image source={Star} style={styles.starIcon} resizeMode="contain" />

      {/* Header */}
      <View style={styles.header}>
        {subtitle && (
          <PixelText variant="pixel" style={styles.subtitle}>
            {subtitle}
          </PixelText>
        )}

        {title && (
          <PixelText variant="pixel" weight="bold" style={styles.title}>
            {title}
          </PixelText>
        )}

        {description && (
          <PixelText variant="montserrat" style={styles.description}>
            {description}
          </PixelText>
        )}
      </View>

      {/* Slot Form */}
      <View style={styles.formContainer}>{children}</View>

      {/* Primary Button */}
      <PixelButton
        title={primaryButtonTitle}
        onPress={onPressPrimary}
        loading={loading}
        disabled={loading}
      />

      {/* Footer */}
      {footerText && footerActionText && (
        <AuthFooterLink
          text={footerText}
          actionText={footerActionText}
          onPress={onPressFooter}
        />
      )}
    </View>
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

  decorLayer: {...StyleSheet.absoluteFillObject},
  decorBox: {
    position: 'absolute',
    backgroundColor: '#96CAE8',
    opacity: 0.19,
  },
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
  },
  starIcon: {
    position: 'absolute',
    top: 52,
    right: 24,
    width: 35,
    height: 35,
  },
  header: {marginBottom: 20},
  subtitle: {fontSize: 14, color: '#000', marginBottom: 4},
  title: {fontSize: 22, color: '#000', marginBottom: 8},
  description: {
    fontSize: 11,
    lineHeight: 16,
    color: '#000',
    maxWidth: '90%',
  },
  formContainer: {marginBottom: 18},
});
