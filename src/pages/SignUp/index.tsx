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
import AuthField from '../../components/molecules/AuthField';
import PixeLogLogo from '../../assets/PixeLog.png';

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Sign Up:', {name, email, password});
      setLoading(false);
    }, 2000);
  };

  const handleGoToSignIn = () => {
    // navigation.navigate('SignIn');
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
          {/* ✅ LOGO DINAİKKAN */}
          <View style={styles.logoContainer}>
            <Image
              source={PixeLogLogo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <SignInCard
            subtitle="Create Account"
            title="Pixel Diary"
            description="Create your account and begin your cozy pixel diary experience."
            primaryButtonTitle="Sign Up"
            onPressPrimary={handleSignUp}
            footerText="Already have an account?"
            footerActionText="Sign In"
            onPressFooter={handleGoToSignIn}
            cardHeight="65%">
            <AuthField
              label="Name"
              placeholder="yourname"
              value={name}
              onChangeText={setName}
            />

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

export default SignUpPage;

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

  /* 🔼 LOGO DIANGKAT KE ATAS */
  logoContainer: {
    alignItems: 'center',
    marginTop: -30, // ⬅️ UBAH INI ( -40 / -60 / -80 )
    marginBottom: 0,
  },

  logo: {
    width: 360, // boleh kecilkan dikit biar proporsional
    height: 360,
  },
});
