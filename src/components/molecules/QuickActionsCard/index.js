import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

const QuickActionCard = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={['#FFFFFF', '#E5F9FF']}
        locations={[0, 1]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.card}>
        {/* ===== Bottom Decorations ===== */}
        <View style={styles.decorWrapper} pointerEvents="none">
          <View style={styles.decor} />
          <View style={styles.decor} />
          <View style={styles.decor} />
          <View style={styles.decor} />
          <View style={styles.decor} />
        </View>

        {/* ===== Content ===== */}
        <View style={styles.content}>
          <PixelIcon source={icon} size={22} />
          <PixelText variant="pixel" style={styles.title}>
            {title}
          </PixelText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default QuickActionCard;

const styles = StyleSheet.create({
  card: {
    width: 179, // ✅ FIGMA WIDTH
    height: 69, // ✅ FIGMA HEIGHT

    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#000',

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    zIndex: 2,
  },

  title: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },

  /* ===== Half Rectangle Decoration ===== */
  decorWrapper: {
    position: 'absolute',
    bottom: -12, // setengah keluar
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: 1,
  },

  decor: {
    width: 28,
    height: 20,
    backgroundColor: '#709FCB',
    borderRadius: 10,
  },
});
