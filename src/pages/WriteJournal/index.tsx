import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  Alert,
} from 'react-native';

import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import Gap from '../../components/atoms/Gap';
import PixelHeader from '../../components/molecules/Header';
import JournalTitleField from '../../components/molecules/TextInput';
import PixelButton from '../../components/atoms/PixelButton';

const useHomeData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setData({userName: 'Victoria'});
      setLoading(false);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  return {loading, data};
};

const WriteJournal = ({navigation}) => {
  const {loading} = useHomeData();

  const [title, setTitle] = useState('');
  const [saving, setSaving] = useState(false);

  const onSubmit = () => {
    // contoh validasi simple
    if (!title.trim()) {
      Alert.alert('Oops', 'Title tidak boleh kosong.');
      return;
    }

    setSaving(true);

    setTimeout(() => {
      setSaving(false);

      // UI only: sementara log
      console.log('SAVE ENTRY:', {title});

      Alert.alert('Saved!', 'Entry berhasil disimpan (UI only).');
      // kalau mau balik:
      // navigation.goBack();
    }, 600);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ActivityIndicator size="large" color="#547CAF" />
        <Text style={styles.loadingText}>Loading your diary...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <CheckerboardBackground />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Gap height={50} />

        <PixelHeader
          title="Write Journal"
          showBack
          onPressBack={() => navigation.goBack()}
        />

        <Gap height={12} />

        <JournalTitleField
          label="Title"
          placeholder="Write Your Title...."
          value={title}
          onChangeText={setTitle}
        />

        <Gap height={14} />

        <PixelButton
          title={saving ? 'Saving...' : 'Save Entry'}
          onPress={onSubmit}
          disabled={saving}
        />

        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default WriteJournal;

const styles = StyleSheet.create({
  container: {flex: 1},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F9FF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
    color: '#547CAF',
    fontFamily: 'PixelifySans-Bold',
  },
  scrollView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingHorizontal: 16},
});
