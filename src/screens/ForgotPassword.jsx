import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// SVG Icons
import Mail from '../assets/svg/Mail.svg';

import { useNavigation } from '@react-navigation/native'; // ← Step 1

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // ← Step 2

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Missing Field', 'Please enter your email or username');
      return;
    }

    // Step 3: Navigate after submission
    Alert.alert('Password Reset', `A reset link has been sent to "${email}".`);

    // Wait 1 second then go to Home
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.heading}>Forget</Text>
            <Text style={styles.heading}>Password?</Text>

            <View style={styles.formWrapper}>
              <View style={styles.form}>
                {/* Email Input */}
                <View style={styles.inputGroup}>
                  <Mail width={20} height={20} style={styles.icon} />
                  <TextInput
                    placeholder="Username or Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    style={[styles.input, { flex: 1, marginLeft: 8 }]}
                  />
                </View>

                <View style={styles.signUpRow}>
                  <Text style={styles.signUpText}>
                    <Text style={{ color: '#F83758' }}> * </Text>
                    We will send you a message to set or reset your new password
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
  forgotContainer: {
    alignItems: 'flex-end',
  },
  forgot: {
    color: '#F83758',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
});
