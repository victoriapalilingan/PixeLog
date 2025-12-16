import React from 'react';
import {View, StyleSheet} from 'react-native';
import JournalTitleField from '../../molecules/TextInput';
import MoodSelectorRow from '../MoodSelectorRow';
import JournalTextArea from '../../molecules/JournalTextArea';
import Gap from '../../atoms/Gap';

const WriteJournalForm = ({
  title,
  onTitleChange,
  mood,
  onMoodChange,
  content,
  onContentChange,
}) => {
  return (
    <View style={styles.container}>
      <JournalTitleField value={title} onChangeText={onTitleChange} />

      <Gap height={16} />

      <MoodSelectorRow selectedMood={mood} onSelectMood={onMoodChange} />

      <Gap height={16} />

      <JournalTextArea value={content} onChangeText={onContentChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default WriteJournalForm;
