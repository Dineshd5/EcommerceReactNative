import React from 'react';
import StartScreen from './screens/StartScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgotPassword';
import GetStarted from './screens/GetStarted';

import Tabs from './Tabs'; // import your Tab navigator

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="signIn" component={SignIn} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="GetStarted" component={GetStarted} />

          {/* Replace Home and Trending with Tabs */}
          <Stack.Screen name="HomeScreen" component={Tabs} />
          <Stack.Screen name="TrendingScreen" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
