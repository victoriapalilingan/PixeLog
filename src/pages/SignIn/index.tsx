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
import AuthField from '../../components/molecules/AuthField'; // ✅ pindah ke sini
import PixeLogLogo from '../../assets/PixeLog.png';

const SignInPage = ({navigation}) => {
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

      <CheckerboardBackground />

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

          {/* ✅ SignInCard sekarang jadi wrapper */}
          <SignInCard
            onPressLogin={handleLogin}
            onPressRegister={handleRegister}
            loading={loading}
            cardHeight="55%">
            {/* ✅ AuthField dipanggil di page */}
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
    justifyContent: 'space-between',
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
