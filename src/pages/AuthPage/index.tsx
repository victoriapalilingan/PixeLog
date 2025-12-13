import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from 'react-native';

import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import SignInCard from '../../components/organism/SignInCard';
import AuthField from '../../components/molecules/AuthField';
import PixelPopup from '../../components/molecules/PixelPopUp';
import PixeLogLogo from '../../assets/PixeLog.png';

const AuthPage = ({route, navigation}) => {
  const initialMode = route?.params?.mode || 'signIn'; // 'signIn' | 'signUp'
  const [mode, setMode] = useState(initialMode);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  // ✅ popup state
  const [popupVisible, setPopupVisible] = useState(false);

  const config = useMemo(() => {
    if (mode === 'signUp') {
      return {
        subtitle: 'Create Account',
        title: 'Pixel Diary',
        description:
          'Create your account and begin your cozy pixel diary experience.',
        primaryButtonTitle: 'Sign Up',
        cardHeight: '65%',
        footerText: 'Already have an account?',
        footerActionText: 'Sign In',
      };
    }

    return {
      subtitle: 'Let’s Start Your',
      title: 'Pixel Diary Journey',
      description:
        'Write, track, and organize your moments in a cozy pastel pixel world.',
      primaryButtonTitle: 'Log In',
      cardHeight: '55%',
      footerText: "Don't have an account?",
      footerActionText: 'Sign Up',
    };
  }, [mode]);

  // ✅ UI-only submit
  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (mode === 'signUp') {
        // ✅ SignUp -> tampil popup
        setPopupVisible(true);
        return;
      }

      // ✅ SignIn -> navigate ke HomeScreen
      navigation.replace('HomeScreen');
    }, 600);
  };

  const toggleMode = () => {
    setMode(prev => (prev === 'signIn' ? 'signUp' : 'signIn'));
  };

  const goToSignIn = () => {
    // tombol "LOGIN NOW" di popup
    setPopupVisible(false);
    setMode('signIn');
  };

  return (
    <View style={styles.container}>
      <CheckerboardBackground />

      {/* ✅ POPUP sukses signup (UI ONLY) */}
      <PixelPopup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        theme="success"
        title="REGISTRASI BERHASIL!"
        message="Akun kamu sudah aktif. Yuk login untuk mulai isi Pixel Diary!"
        buttonLabel="LOGIN NOW"
        onButtonPress={goToSignIn}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.logoContainer}>
            <Image
              source={PixeLogLogo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <SignInCard
            subtitle={config.subtitle}
            title={config.title}
            description={config.description}
            primaryButtonTitle={
              loading ? 'Processing...' : config.primaryButtonTitle
            }
            onPressPrimary={onSubmit}
            footerText={config.footerText}
            footerActionText={config.footerActionText}
            onPressFooter={toggleMode}
            loading={loading}
            cardHeight={config.cardHeight}>
            {mode === 'signUp' && (
              <AuthField
                label="Name"
                placeholder="yourname"
                value={name}
                onChangeText={setName}
              />
            )}

            <AuthField
              label="Email"
              placeholder="youremail@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <AuthField
              label="Password"
              placeholder="••••••••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </SignInCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {flex: 1},
  keyboardView: {flex: 1},
  scrollContent: {flexGrow: 1, justifyContent: 'space-between'},
  logoContainer: {alignItems: 'center', paddingTop: 10, paddingBottom: 10},
  logo: {width: 400, height: 400},
});
