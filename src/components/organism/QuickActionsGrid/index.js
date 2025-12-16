import React from 'react';
import {View, StyleSheet} from 'react-native';
import QuickActionCard from '../../molecules/QuickActionsCard';

const ACTIONS = [
  {
    id: 1,
    icon: require('../../../assets/Pen.png'),
    title: 'Write Journal',
    route: 'WriteJournalPage',
  },
  {
    id: 2,
    icon: require('../../../assets/Folder.png'),
    title: 'View Entries',
    route: 'ViewEntries',
  },
  {
    id: 3,
    icon: require('../../../assets/Clock.png'),
    title: 'Today Summary',
    route: 'SummaryPage',
  },
  {
    id: 4,
    icon: require('../../../assets/Happy.png'),
    title: 'Mood Check',
    route: 'MoodCheckPage',
  },
];
const QuickActionsGrid = ({navigation}) => {
  const handleActionPress = action => {
    if (action.route) {
      navigation.navigate(action.route);
      return;
    }

    console.log('No route defined for:', action.title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <QuickActionCard
          icon={ACTIONS[0].icon}
          title={ACTIONS[0].title}
          onPress={() => handleActionPress(ACTIONS[0])}
        />
        <View style={styles.gap} />
        <QuickActionCard
          icon={ACTIONS[1].icon}
          title={ACTIONS[1].title}
          onPress={() => handleActionPress(ACTIONS[1])}
        />
      </View>

      <View style={styles.rowGap} />

      <View style={styles.row}>
        <QuickActionCard
          icon={ACTIONS[2].icon}
          title={ACTIONS[2].title}
          onPress={() => handleActionPress(ACTIONS[2])}
        />
        <View style={styles.gap} />
        <QuickActionCard
          icon={ACTIONS[3].icon}
          title={ACTIONS[3].title}
          onPress={() => handleActionPress(ACTIONS[3])}
        />
      </View>
    </View>
  );
};

export default QuickActionsGrid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  gap: {
    width: 12,
  },
  rowGap: {
    height: 12,
  },
});
