import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from './components/CameraScreen';
import ImageScreen from './components/ImageScreen';

export default function App() {
  const Stack = createStackNavigator();
  /*Bruger stack navigator til at vise billeder taget fra app*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'home'} component={CameraScreen} options={{headerShown: false}} />
        <Stack.Screen name={'image'} component={ImageScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/