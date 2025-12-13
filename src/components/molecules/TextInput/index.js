import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

// Component PixelText untuk label (sesuaikan dengan PixelText component Anda)
const PixelText = ({children, style}) => (
  <Text style={[styles.pixelFont, style]}>{children}</Text>
);

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
  pixelFont: {
    fontFamily: 'PixelifySans-Regular',
  },
  outerFrame: {
    backgroundColor: '#96CAE8', // Biru pastel dari Figma
    borderColor: '#000',
    borderWidth: 4, // Border tebal pixel-style
    borderRadius: 18,
    padding: 12,
    width: 372, // Atau ganti jadi 370 kalau mau fixed width
    marginLeft: 20,
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
    marginBottom: 4, // Jarak rapat dengan input
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
