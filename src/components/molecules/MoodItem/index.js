import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

const MoodItem = ({icon, label, selected = false, onPress}) => {
  const Content = (
    <>
      <PixelIcon source={icon} size={32} />
      <PixelText variant="pixel" style={styles.label}>
        {label}
      </PixelText>
    </>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.wrapper}>
      {selected ? (
        <LinearGradient
          colors={['#547CAF', '#6D9BC7', '#BBE2EF']}
          locations={[0, 0.5, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.container, styles.containerSelected]}>
          {Content}
        </LinearGradient>
      ) : (
        <View style={styles.container}>{Content}</View>
      )}
    </TouchableOpacity>
  );
};

export default MoodItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    aspectRatio: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  containerSelected: {
    borderWidth: 2, // tetap stroke pixel
    transform: [{scale: 1.04}],
  },

  label: {
    fontSize: 10,
    color: '#000',
    marginTop: 4,
    textAlign: 'center',
  },
});
