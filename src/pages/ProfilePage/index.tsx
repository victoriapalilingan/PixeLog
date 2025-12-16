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
import PixelButton from '../../components/atoms/PixelButton';

const ProfilePage = () => {
  const [user] = useState({
    name: 'Victoria',
    email: 'victoria@email.com',
  });

  const onLogout = () => {
    console.log('logout UI only');
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
            {/* Header */}
            <Gap height={30} />
            <PixelHeader
              title="Profile"
              showBack={false}
              onPressRight={() => console.log('Star pressed')}
            />

            <Gap height={24} />

            {/* Profile Card */}
            <View style={styles.profileCard}>
              <PixelText variant="pixel" weight="bold" style={styles.name}>
                {user.name}
              </PixelText>

              <Gap height={8} />

              <PixelText variant="pixel" style={styles.email}>
                {user.email}
              </PixelText>
            </View>

            <Gap height={24} />

            {/* Actions */}
            <PixelButton title="Logout" onPress={onLogout} />

            <Gap height={40} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </CheckerboardBackground>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, paddingVertical: 20},
  container: {paddingHorizontal: 20, width: '100%'},
  profileCard: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 16,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
  email: {
    fontSize: 12,
    color: '#000',
    opacity: 0.8,
  },
});
