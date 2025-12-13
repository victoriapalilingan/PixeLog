import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import PixelText from '../../atoms/PixelText';

const AuthFooterLink = ({
  text = "Don't have an account?",
  actionText = 'Register Now',
  onPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <PixelText variant="montserrat" style={styles.text}>
        {text}{' '}
      </PixelText>

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <PixelText variant="montserrat" weight="bold" style={styles.link}>
          {actionText}
        </PixelText>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooterLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    color: '#666666',
  },
  link: {
    fontSize: 12,
    color: '#547CAF',
  },
});
