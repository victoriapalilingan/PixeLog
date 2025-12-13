import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';

const DAYS = [
  {short: 'Mon', date: 7},
  {short: 'Tue', date: 8},
  {short: 'Wed', date: 9},
  {short: 'Thu', date: 10},
  {short: 'Fri', date: 11},
  {short: 'Sat', date: 12},
  {short: 'Sun', date: 13},
];

const DecorativePixels = () => {
  return (
    <View style={styles.decorativeContainer} pointerEvents="none">
      {/* 4x4 pixel blocks */}
      <View style={[styles.pixelRect, {top: 6, left: 6}]} />
      <View style={[styles.pixelRect, {top: 10, left: 14}]} />
      <View style={[styles.pixelRect, {top: 8, right: 10}]} />
      <View style={[styles.pixelRect, {bottom: 10, left: 8}]} />
    </View>
  );
};

const CalendarStrip = ({activeDate = 9, onSelectDate}) => {
  const handleDatePress = date => {
    if (onSelectDate) onSelectDate(date);
  };

  return (
    <View style={styles.outerCard}>
      <View style={styles.daysContainer}>
        {DAYS.map((day, index) => {
          const isActive = day.date === activeDate;

          return (
            <View key={index} style={styles.columnContainer}>
              {/* Day label (di luar kotak) */}
              <PixelText variant="pixel" style={styles.dayLabel}>
                {day.short}
              </PixelText>

              {/* Date Box */}
              <TouchableOpacity
                style={styles.dateBoxWrapper}
                onPress={() => handleDatePress(day.date)}
                activeOpacity={0.7}>
                {isActive ? (
                  <LinearGradient
                    colors={['#547CAF', '#709FCB', '#96CAE8']}
                    locations={[0, 0.5, 1]}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styles.dateBoxGradient}>
                    {/* ✅ decorative pixels */}
                    <DecorativePixels />

                    <PixelText variant="pixel" style={styles.dateNumberActive}>
                      {day.date}
                    </PixelText>
                  </LinearGradient>
                ) : (
                  <View style={styles.dateBoxDefault}>
                    {/* ✅ decorative pixels */}
                    <DecorativePixels />

                    <PixelText variant="pixel" style={styles.dateNumberDefault}>
                      {day.date}
                    </PixelText>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CalendarStrip;

const styles = StyleSheet.create({
  /* Outer Card */
  outerCard: {
    width: 370,
    height: 83,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  columnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Day Label */
  dayLabel: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 4,
  },

  /* Wrapper for 43x43 */
  dateBoxWrapper: {
    width: 43,
    height: 43,
  },

  /* Default Box */
  dateBoxDefault: {
    width: 43,
    height: 43,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // ✅ biar pixel ga keluar radius
  },

  /* Active Box Gradient */
  dateBoxGradient: {
    width: 43,
    height: 43,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // ✅ biar pixel ga keluar radius
  },

  /* Decorative pixels container */
  decorativeContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  /* 4x4 pixel */
  pixelRect: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: '#547CAF',
    opacity: 0.24,
    borderRadius: 1,
  },

  /* Date text */
  dateNumberDefault: {
    fontSize: 25,
    color: '#547CAF',
  },

  dateNumberActive: {
    fontSize: 25,
    color: '#FFFFFF',
  },
});
