import React from 'react';
import {View, StyleSheet} from 'react-native';
import MoodItem from '../../molecules/MoodItem';

// Import icons (sesuaikan path)
import HappyIcon from '../../../assets/Happy2.png';
import CalmIcon from '../../../assets/Calm.png';
import SadIcon from '../../../assets/Sad.png';
import TiredIcon from '../../../assets/TIred.png';
import NeutralIcon from '../../../assets/White Heart.png';

const MOODS = [
  {id: 'happy', label: 'Happy', icon: HappyIcon},
  {id: 'calm', label: 'Calm', icon: CalmIcon},
  {id: 'sad', label: 'Sad', icon: SadIcon},
  {id: 'tired', label: 'Tired', icon: TiredIcon},
  {id: 'neutral', label: 'Neutral', icon: NeutralIcon},
];

const MoodSelectorRow = ({selectedMood, onSelectMood}) => {
  return (
    <View style={styles.container}>
      {MOODS.map(mood => (
        <MoodItem
          key={mood.id}
          icon={mood.icon}
          label={mood.label}
          selected={selectedMood === mood.id}
          onPress={() => onSelectMood(mood.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
  },
});

export default MoodSelectorRow;
