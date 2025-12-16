import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

import BackIcon from '../../../assets/Back To.svg';
import StarIcon from '../../../assets/Star.png';

const PixelHeader = ({
  title = '',
  showBack = false,
  onPressBack,
  rightIcon = StarIcon,
  onPressRight,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onPressBack) {
      onPressBack();
      return;
    }

    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* ===== LEFT ===== */}
      {showBack ? (
        <TouchableOpacity
          onPress={handleBack}
          activeOpacity={0.7}
          style={styles.leftButton}>
          <PixelIcon source={BackIcon} size={18} />
        </TouchableOpacity>
      ) : (
        <View style={styles.leftSpacer} />
      )}

      {/* ===== TITLE ===== */}
      <PixelText
        variant="pixel"
        weight="bold"
        style={styles.title}
        numberOfLines={1}>
        {title}
      </PixelText>

      {/* ===== RIGHT ===== */}
      {rightIcon ? (
        <TouchableOpacity
          onPress={onPressRight}
          activeOpacity={0.7}
          style={styles.rightButton}>
          <PixelIcon source={rightIcon} size={22} />
        </TouchableOpacity>
      ) : (
        <View style={styles.rightSpacer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    width: '100%', // ✅ FULL WIDTH
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    // ✅ NO marginLeft/marginTop
  },
  leftButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  leftSpacer: {
    width: 32,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    letterSpacing: 0.5,
  },
  rightButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSpacer: {
    width: 32,
  },
});

export default PixelHeader;
