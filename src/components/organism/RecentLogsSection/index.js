import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PixelText from '../../atoms/PixelText';
import RecentLogItem from '../../molecules/RecentLogItem';
import Gap from '../../atoms/Gap';

const RECENT_LOGS = [
  {
    id: 1,
    title: 'Morning Thoughts',
    time: 'Today 9:21 • 2 min',
    icon: require('../../../assets/Happy.png'),
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Night Overthinking',
    time: 'Yesterday 23:15 • 5 min',
    icon: require('../../../assets/Happy.png'),
    isFavorite: true,
  },
];

const RecentLogsSection = ({onPressSeeAll}) => {
  const handleLogPress = log => {
    console.log('Log pressed:', log.title);
  };

  return (
    <View style={styles.container}>
      {/* ===== Header ===== */}
      <View style={styles.headerRow}>
        <PixelText variant="pixel" weight="bold" style={styles.sectionTitle}>
          Recent Logs
        </PixelText>

        {/* ✅ See all as button */}
        <TouchableOpacity
          style={styles.seeAllButton}
          onPress={onPressSeeAll}
          activeOpacity={0.8}>
          <PixelText variant="pixel" weight="regular" style={styles.seeAllText}>
            See all
          </PixelText>
        </TouchableOpacity>
      </View>

      <Gap height={12} />

      {RECENT_LOGS.map(log => (
        <RecentLogItem
          key={log.id}
          title={log.title}
          time={log.time}
          icon={log.icon}
          isFavorite={log.isFavorite}
          onPress={() => handleLogPress(log)}
        />
      ))}
    </View>
  );
};

export default RecentLogsSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  /* ===== Header ===== */
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
  },

  /* ===== See all button ===== */
  seeAllButton: {
    backgroundColor: '#E5F9FF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  seeAllText: {
    fontSize: 12,
    color: '#000',
  },
});
