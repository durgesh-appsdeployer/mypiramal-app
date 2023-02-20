import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
// import Payments from './src/screens/Payments';
import Splash from './src/screens/Splash';
import Sidebar from './src/screens/Sidebar';
import Home from './src/screens/zomato/Home';
import First from './src/screens/zomato/First';
import Second from './src/screens/zomato/Second';
import Third from './src/screens/zomato/Third';
import Fourth from './src/screens/zomato/Fourth';
import Fifth from './src/screens/zomato/Fifth';
import Sixth from './src/screens/zomato/Sixth';
import MobileVerification from './src/screens/zomato/MobileVerification';
import Otp from './src/screens/zomato/OtpScreen';
import LoggedIn from './src/screens/zomato/LoggedIn';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mv" component={MobileVerification} options={{ title: 'Mobile Verification', headerShown: false }}></Stack.Screen>
          <Stack.Screen name="otp" component={Otp} options={{ title: 'OTP', headerShown: true }}></Stack.Screen>
          <Stack.Screen name="loggedin" component={LoggedIn} options={{ title: 'Logged in', headerShown: false }}></Stack.Screen>
          {/* <Stack.Screen name="sixth" component={Sixth} options={{ title: 'Sixth', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="fifth" component={Fifth} options={{ title: 'Fifth', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="fourth" component={Fourth} options={{ title: 'Fourth', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="third" component={Third} options={{ title: 'Third', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="second" component={Second} options={{ title: 'Second', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="first" component={First} options={{ title: 'First', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="home" component={Home} options={{ title: 'Home', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="splash" component={Splash} options={{ title: 'Loading', headerShown: false }}></Stack.Screen> */}
          {/* <Stack.Screen name="sidebar" component={Sidebar} options={{ title: 'Loading', headerShown: false }}></Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
