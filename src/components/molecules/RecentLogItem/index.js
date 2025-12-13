import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

const RecentLogItem = ({title, time, icon, isFavorite, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.touchWrapper}>
      {/* ===== Gradient Card ===== */}
      <LinearGradient
        colors={['#FFFFFF', '#E5F9FF']}
        locations={[0, 1]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.container}>
        {/* Left */}
        <View style={styles.leftSection}>
          <PixelIcon source={icon} size={24} style={styles.emoji} />

          <View style={styles.textContainer}>
            <PixelText variant="pixel" weight="bold" style={styles.title}>
              {title}
            </PixelText>

            <PixelText variant="montserrat" style={styles.time}>
              {time}
            </PixelText>
          </View>
        </View>

        {/* Right */}
        {isFavorite && (
          <PixelIcon source={require('../../../assets/Star.png')} size={20} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RecentLogItem;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  touchWrapper: {
    marginBottom: 10,
  },

  container: {
    width: 369,
    height: 52,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000000',

    paddingHorizontal: 14,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  emoji: {
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
  },

  time: {
    fontSize: 11,
    color: '#666666',
    lineHeight: 14,
  },
});
