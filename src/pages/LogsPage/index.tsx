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

const LogsPage = () => {
  const [logs] = useState([
    {id: '1', title: 'A Good Day', date: 'Dec 16, 2025', mood: 'happy'},
    {id: '2', title: 'Tired but okay', date: 'Dec 15, 2025', mood: 'tired'},
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
            {/* Header */}
            <PixelHeader
              title="Logs"
              showBack={false}
              onPressRight={() => console.log('Star pressed')}
            />

            <Gap height={24} />

            {/* Content (UI only placeholder) */}
            <PixelText variant="pixel" style={styles.sectionTitle}>
              Recent Entries
            </PixelText>

            <Gap height={12} />

            {logs.map(item => (
              <View key={item.id} style={styles.logCard}>
                <PixelText
                  variant="pixel"
                  weight="bold"
                  style={styles.logTitle}>
                  {item.title}
                </PixelText>

                <Gap height={6} />

                <PixelText variant="pixel" style={styles.logMeta}>
                  {item.date} • {item.mood}
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

export default LogsPage;

const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingVertical: 20},
  container: {paddingHorizontal: 20, width: '100%'},
  sectionTitle: {
    fontSize: 18,
    color: '#000',
  },
  logCard: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  logTitle: {
    fontSize: 16,
    color: '#000',
  },
  logMeta: {
    fontSize: 12,
    color: '#000',
    opacity: 0.8,
  },
});
