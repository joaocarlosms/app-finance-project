import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../src/pages/Welcome/welcome';
import SignIn from '../src/pages/SignIn/signIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import About from '../src/pages/About/about';

export default function Route() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator>
        <Screen 
            name='SignIn' 
            component={SignIn} 
            options={{ headerShown:false }}
        />
        <Screen 
            name='Welcome' 
            component={Welcome} 
            options={{ headerShown:false }}
        />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7e22cb',
  }
})
