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
import WriteJournalForm from '../../components/organism/WriteJournalForm';
import WriteJournalFooter from '../../components/organism/WriteJournalFooter';
import Gap from '../../components/atoms/Gap';

const WriteJournalPage = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('happy');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // API call atau save logic
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Saved:', {title, mood, content});
      alert('Journal saved successfully! 📝');

      // Reset form
      setTitle('');
      setContent('');
      setMood('happy');
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save journal');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

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
              title="Write Journal"
              showBack
              onPressRight={() => console.log('Star pressed')}
            />

            <Gap height={24} />

            {/* Form */}
            <WriteJournalForm
              title={title}
              onTitleChange={setTitle}
              mood={mood}
              onMoodChange={setMood}
              content={content}
              onContentChange={setContent}
            />

            <Gap height={24} />

            {/* Footer Button */}
            <WriteJournalFooter onSave={handleSave} loading={loading} />

            <Gap height={40} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </CheckerboardBackground>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20, // ✅ SPACING GLOBAL
    width: '100%',
  },
});

export default WriteJournalPage;
