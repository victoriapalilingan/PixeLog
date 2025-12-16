import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import PixelHeader from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import PixelText from '../../components/atoms/PixelText';

import MoodSelectorRow from '../../components/organism/MoodSelectorRow'; // kalau sudah ada

const MoodCheckPage = ({navigation}) => {
  const [mood, setMood] = useState('happy');

  return (
    <CheckerboardBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <Gap height={30} />

            <PixelHeader title="Mood Check" showBack />

            <Gap height={24} />

            <PixelText variant="pixel" weight="bold" style={styles.label}>
              How do you feel today?
            </PixelText>

            <Gap height={12} />

            {/* kalau komponen belum ada, kamu bisa comment dulu */}
            <MoodSelectorRow mood={mood} onMoodChange={setMood} />

            <Gap height={16} />

            <View style={styles.card}>
              <PixelText variant="pixel" style={styles.desc}>
                Selected mood: {mood}
              </PixelText>
            </View>

            <Gap height={40} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </CheckerboardBackground>
  );
};

export default MoodCheckPage;

const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingVertical: 20},
  container: {paddingHorizontal: 20, width: '100%'},
  label: {fontSize: 16, color: '#000'},
  card: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 14,
  },
  desc: {fontSize: 12, color: '#000', opacity: 0.85},
});
