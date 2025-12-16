import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

import PlusIcon from '../../../assets/Plus.png';

const JournalTextArea = ({
  value,
  onChangeText,
  placeholder = 'Start Writing your thoughts....',
}) => {
  return (
    <LinearGradient
      colors={['rgba(84,124,175,0.75)', '#95C1DD', '#BBE2EF']}
      locations={[0, 0.32, 0.63]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.gradientFrame}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <PixelIcon source={PlusIcon} size={20} style={styles.headerIcon} />
        <PixelText variant="pixel" style={styles.headerText}>
          My Journal
        </PixelText>
      </View>

      {/* Inner White Card with TextInput */}
      <View style={styles.innerCard}>
        <TextInput
          style={styles.textArea}
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          value={value}
          onChangeText={onChangeText}
          multiline
          textAlignVertical="top"
          underlineColorAndroid="transparent"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  /* Gradient Frame (sama seperti homescreen) */
  gradientFrame: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    minHeight: 250,
  },

  /* Header Bar (sama seperti homescreen) */
  headerBar: {
    width: 370,
    height: 34,
    backgroundColor: '#E5F9FF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginLeft: -10,
    marginTop: -10,
    marginBottom: 10,
    marginRight: -10,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'PixelifySans-Regular',
  },

  /* Inner Card (sama seperti homescreen) */
  innerCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    padding: 18,
    minHeight: 180,
  },

  /* Text Area */
  textArea: {
    fontFamily: 'PixelifySans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#000',
    minHeight: 140,
    padding: 0,
    textAlignVertical: 'top',
  },
});

export default JournalTextArea;
