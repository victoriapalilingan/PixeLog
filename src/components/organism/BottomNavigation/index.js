import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelIcon from '../../atoms/PixelIcon';
import PixelText from '../../atoms/PixelText';

const BottomNavigation = ({items = [], activeKey, onTabPress}) => {
  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View style={styles.shadowBlock} />

      <LinearGradient
        colors={['#85BBE0', '#6896D1']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        {items.map(item => {
          const isActive = item.key === activeKey;

          return (
            <TouchableOpacity
              key={item.key}
              style={styles.navItem}
              activeOpacity={0.8}
              onPress={() => onTabPress?.(item.key)}>
              <View
                style={[
                  styles.iconContainer,
                  isActive && styles.iconContainerActive,
                ]}>
                <PixelIcon source={item.icon} size={22} />
              </View>

              <PixelText
                variant="pixel"
                style={[styles.label, isActive && styles.labelActive]}>
                {item.label}
              </PixelText>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

export default BottomNavigation;

const RADIUS = 18;
const SHADOW_OFFSET = 3;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 18,
    height: 72,
    zIndex: 999,
    elevation: 999, // ✅ penting supaya bisa diklik (Android)
  },

  shadowBlock: {
    position: 'absolute',
    left: SHADOW_OFFSET,
    top: SHADOW_OFFSET,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    borderRadius: RADIUS,
  },

  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: SHADOW_OFFSET,
    bottom: SHADOW_OFFSET,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#000',
    borderRadius: RADIUS,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainerActive: {
    backgroundColor: '#547CAF',
    borderWidth: 2,
    borderColor: '#000',
    transform: [{translateY: -2}],
  },

  label: {
    marginTop: 2,
    fontSize: 10,
    color: '#fff',
    letterSpacing: 0.5,
  },

  labelActive: {
    color: '#fff',
  },
});
