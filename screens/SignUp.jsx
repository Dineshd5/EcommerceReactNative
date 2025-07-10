import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Custom SVG icons
import EyeOpen from '../assets/svg/EyeOpen.svg';
import Lock from '../assets/svg/Lock.svg';
import User from '../assets/svg/User.svg';

const SignIn = () => {
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>Welcome{'\n'}Back!</Text>

      <View style={styles.formWrapper}>
        <View style={styles.form}>
          {/* Username Input with User Icon */}
          <View style={styles.inputGroup}>
            <User width={20} height={20} style={styles.icon} />
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor="#999"
              style={[styles.input, { flex: 1, marginLeft: 8 }]}
            />
          </View>

          {/* Password Input with Lock Icon and Eye Toggle */}
          <View
            style={[styles.inputGroup, { justifyContent: 'space-between' }]}
          >
            <Lock width={20} height={20} style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={secure}
              style={[styles.input, { flex: 1, marginLeft: 8, marginRight: 8 }]}
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
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
              style={[styles.input, { flex: 1, marginLeft: 8, marginRight: 8 }]}
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <EyeOpen width={20} height={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 36,
    lineHeight: 43,
    marginBottom: 24,
    marginLeft: 20,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
  },
  formWrapper: {
    flex: 1,
    alignItems: 'center',
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
  forgotContainer: {
    alignItems: 'flex-end',
  },
  forgot: {
    color: 'rgba(248, 55, 88, 1)',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(248, 55, 88, 1)',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
});
