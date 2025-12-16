import React from 'react';
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

const SummaryPage = ({navigation}) => {
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

            <PixelHeader title="Today Summary" showBack />

            <Gap height={24} />

            <View style={styles.card}>
              <PixelText variant="pixel" weight="bold" style={styles.title}>
                Summary (UI Only)
              </PixelText>
              <Gap height={10} />
              <PixelText variant="pixel" style={styles.desc}>
                - Total entries: 2{'\n'}- Most mood: Happy{'\n'}- Last note: "A
                Good Day"
              </PixelText>
            </View>

            <Gap height={40} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </CheckerboardBackground>
  );
};

export default SummaryPage;

const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingVertical: 20},
  container: {paddingHorizontal: 20, width: '100%'},
  card: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 16,
  },
  title: {fontSize: 16, color: '#000'},
  desc: {fontSize: 12, color: '#000', opacity: 0.85, lineHeight: 18},
});
