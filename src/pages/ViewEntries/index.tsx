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

const ViewEntriesPage = ({navigation}) => {
  const [entries] = useState([
    {id: '1', title: 'A Good Day', mood: 'happy'},
    {id: '2', title: 'Feeling Calm', mood: 'calm'},
    {id: '3', title: 'So Tired', mood: 'tired'},
  ]);

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

            <PixelHeader title="View Entries" showBack />

            <Gap height={24} />

            {entries.map(item => (
              <View key={item.id} style={styles.card}>
                <PixelText
                  variant="pixel"
                  weight="bold"
                  style={styles.cardTitle}>
                  {item.title}
                </PixelText>
                <Gap height={6} />
                <PixelText variant="pixel" style={styles.cardSub}>
                  Mood: {item.mood}
                </PixelText>
              </View>
            ))}

            <Gap height={40} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </CheckerboardBackground>
  );
};

export default ViewEntriesPage;

const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingVertical: 20},
  container: {paddingHorizontal: 20, width: '100%'},
  card: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  cardTitle: {fontSize: 16, color: '#000'},
  cardSub: {fontSize: 12, color: '#000', opacity: 0.8},
});
