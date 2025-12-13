import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import SignInCard from '../../components/organism/SignInCard';
import PixeLogLogo from '../../assets/PixeLog.png';

const SignInPage = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    setTimeout(() => {
      console.log('Login:', {email, password});
      setLoading(false);
      // navigation.navigate('Main');
    }, 2000);
  };

  const handleRegister = () => {
    console.log('Navigate to Register');
    // navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={[
          '#E5F9FF',
          '#D5F2FA',
          '#C5EBF5',
          '#B5E4F0',
          '#A5DDEB',
          '#96CAE8',
          '#8BC3E6',
          '#81BCE4',
          '#77B5E2',
          '#6DAEE0',
          '#63A7CE',
          '#5A9FCC',
          '#5298CA',
          '#4A91C8',
          '#547CAF',
        ]}
        locations={[
          0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.54, 0.6, 0.66, 0.72, 0.78,
          0.84, 0.9, 1,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />

      {/* Checkerboard Pattern */}
      <CheckerboardBackground />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {/* Logo Area (Bagian Atas) */}
          <View style={styles.logoContainer}>
            <Image
              source={PixeLogLogo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Sign In Card (Bottom Sheet) */}
          <SignInCard
            email={email}
            password={password}
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            onPressLogin={handleLogin}
            onPressRegister={handleRegister}
            loading={loading}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between', // logo di atas, card di bawah
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 400,
    height: 400,
  },
});
