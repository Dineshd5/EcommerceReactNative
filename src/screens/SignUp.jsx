import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Animated } from 'react-native'; // ADD THIS
// SVG Icons
import EyeOpen from '../assets/svg/EyeOpen.svg';
import Lock from '../assets/svg/Lock.svg';
import User from '../assets/svg/User.svg';
import Google from '../assets/svg/Google.svg';
import Apple from '../assets/svg/Apple.svg';
import Facebook from '../assets/svg/Facebook.svg';
import FadeNavigator from '../components/FadeNavigator';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {
  const [secure, setSecure] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current; // ADD THIS

  const handleLogin = async () => {
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('username', username); // Optional: save username
      navigation.replace('GetStarted');
    } catch (error) {
      console.log('Login error:', error);
    }
  };
  const isFormValid =
    username.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={80}>
        <View>
          <Text style={styles.heading}>Create an</Text>
          <Text style={styles.heading}>account</Text>
        </View>

        <View style={styles.formWrapper}>
          <View style={styles.form}>
            {/* Username Input */}
            <View style={styles.inputGroup}>
              <User width={20} height={20} style={styles.icon} />
              <TextInput
                placeholder="Username or Email"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                style={[styles.input, { flex: 1, marginLeft: 8 }]}
              />
            </View>

            {/* Password Input */}
            <View
              style={[styles.inputGroup, { justifyContent: 'space-between' }]}
            >
              <Lock width={20} height={20} style={styles.icon} />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
                style={[
                  styles.input,
                  { flex: 1, marginLeft: 8, marginRight: 8 },
                ]}
              />

              <TouchableOpacity onPress={() => setSecure(!secure)}>
                <EyeOpen width={20} height={20} />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.inputGroup, { justifyContent: 'space-between' }]}
            >
              <Lock width={20} height={20} style={styles.icon} />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry={secure}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={[
                  styles.input,
                  { flex: 1, marginLeft: 8, marginRight: 8 },
                ]}
              />

              <TouchableOpacity onPress={() => setSecure(!secure)}>
                <EyeOpen width={20} height={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.RegisterContainer}>
              <Text style={styles.Register}>
                By clicking the
                <Text style={styles.RegisterSpan}> Register </Text>
                button, you agree to the public offer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buttonContainer,
                !isFormValid ? styles.buttonDisabled : null,
              ]}
              onPress={handleLogin}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <View>
              <View style={styles.socialContainer}>
                <Text style={styles.orText}>- OR Continue with -</Text>

                <View style={styles.socialRow}>
                  <TouchableOpacity
                    style={styles.circleIcon}
                    onPress={() =>
                      Linking.openURL('https://accounts.google.com/signin')
                    }
                  >
                    <Google width={24} height={24} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.circleIcon}
                    onPress={() =>
                      Linking.openURL(
                        'https://appleid.apple.com/auth/authorize',
                      )
                    }
                  >
                    <Apple width={24} height={24} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.circleIcon}
                    onPress={() =>
                      Linking.openURL('https://www.facebook.com/login.php')
                    }
                  >
                    <Facebook width={24} height={24} />
                  </TouchableOpacity>
                </View>

                <View style={styles.signUpRow}>
                  <Animated.View
                    style={[styles.signUpRow, { opacity: fadeAnim }]}
                  >
                    <Text style={styles.signUpText}>
                      I Already Have an Account{' '}
                    </Text>
                    <FadeNavigator
                      fadeAnim={fadeAnim}
                      navigation={navigation}
                      to="signIn"
                    >
                      <Text style={styles.signUpLink}>Login</Text>
                    </FadeNavigator>
                  </Animated.View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    lineHeight: 38,
    marginLeft: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000',
  },
  formWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 24,
  },
  form: {
    width: 317,
    gap: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(168, 168, 169, 1)',
    backgroundColor: 'rgba(243, 243, 243, 1)',
    paddingHorizontal: 12,
    height: 55,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-Regular',
  },
  socialContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 185,
    minHeight: 91,
  },
  RegisterContainer: {
    alignItems: 'flex-start',
  },
  Register: {
    color: 'rgba(103, 103, 103, 1)',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },

  RegisterSpan: {
    color: '#F83758',
  },

  buttonContainer: {
    marginTop: 8,
    paddingVertical: 14,
    backgroundColor: '#F83758',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonDisabled: {
    backgroundColor: 'rgb(253, 184, 196)', // soft faded pink
  },

  buttonTextDisabled: {
    color: '#fff', // keep it white, or use a faded red like '#f99aaa' if you want a more "disabled" feel
  },

  orText: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#999',
    fontFamily: 'Montserrat-Regular',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  circleIcon: {
    borderWidth: 1,
    backgroundColor: 'rgba(252, 243, 246, 1)',
    borderColor: 'rgba(248, 55, 88, 1)',
    borderRadius: 50,
    padding: 15,
  },
  signUpRow: {
    minWidth: 194,
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontFamily: 'Montserrat-Regular',
    color: '#333',
  },
  signUpLink: {
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-SemiBold',
    color: '#F83758',
  },
});
