import React from 'react';
import {View, StyleSheet} from 'react-native';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';
import StarIcon from '../../../assets/Star.png';

const HomeGreeting = ({userName}) => {
  return (
    <View style={styles.container}>
      <PixelText variant="pixel" weight="bold" style={styles.greetingText}>
        Hi, {userName}
      </PixelText>

      <PixelIcon source={StarIcon} size={24} />
    </View>
  );
};

export default HomeGreeting;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: 52, // ✅ tinggi konsisten (pill)
    weight: 370,
    paddingHorizontal: 20,

    backgroundColor: '#FFFFFF',
    borderRadius: 20, // ✅ lebih pixel-friendly dari 24
    borderWidth: 1, // ✅ stroke sesuai figma
    borderColor: '#000000',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  greetingText: {
    fontSize: 16, // ✅ lebih mirip figma
    color: '#000000',
    letterSpacing: 0.5, // ✅ pixel feel
  },
});
