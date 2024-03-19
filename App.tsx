import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Welcome/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import About from './src/pages/About/about';
import Route from './routes/stack.routes'

export default function App() {
  const stackNavigation = createNativeStackNavigator();

  return (
    <Route />
  );
}

