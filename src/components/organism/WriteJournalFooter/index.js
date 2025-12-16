import React from 'react';
import {View, StyleSheet} from 'react-native';
import PixelButton from '../../atoms/PixelButton';

const WriteJournalFooter = ({onSave, loading = false}) => {
  return (
    <View style={styles.container}>
      <PixelButton title="Save Entry" onPress={onSave} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default WriteJournalFooter;
