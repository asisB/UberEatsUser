import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style='light' />
    </NavigationContainer>
  );
}
/*
   uses of item to display all the list of product 
*/
const styles = StyleSheet.create({
});
