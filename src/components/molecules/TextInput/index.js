import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PixelText from '../../atoms/PixelText';

const JournalTitleField = ({
  label = 'Title',
  placeholder = 'Write Your Title....',
  value,
  onChangeText,
  containerStyle,
  inputProps = {},
}) => {
  return (
    <View style={[styles.outerFrame, containerStyle]}>
      <View style={styles.innerCard}>
        <PixelText variant="pixel" style={styles.label}>
          {label}
        </PixelText>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          {...inputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerFrame: {
    backgroundColor: '#96CAE8',
    borderColor: '#000',
    borderWidth: 4,
    borderRadius: 18,
    padding: 12,
    width: '100%', // ✅ FULL WIDTH
    // ✅ NO marginLeft
  },
  innerCard: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  label: {
    fontSize: 24,
    color: '#000',
    marginBottom: 4,
    fontFamily: 'PixelifySans-Regular',
  },
  input: {
    fontFamily: 'PixelifySans-Regular',
    fontSize: 18,
    color: '#000',
    padding: 0,
    margin: 0,
    minHeight: 24,
  },
});

export default JournalTitleField;
