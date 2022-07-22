import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Header from './header';
import Info from './info';
import Lang from './lang';
import Movies from './movies';
import Details from './movieDetails';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Todo from './ToDo';
import ContactForm from './form';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ScrollView style={styles.contentContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Header} />
          <Stack.Screen name="info" component={Info} />
          <Stack.Screen name="lang" component={Lang} />
          <Stack.Screen name="movies" component={Movies} />
          <Stack.Screen name="details" component={Details} />
          <Stack.Screen name="todo" component={Todo} />
          <Stack.Screen name="form" component={ContactForm} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hr:{
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
    marginTop:30,
    marginBottom:10,
    width:350,
    marginLeft:30
  },
  lastElem:{
    marginTop:40
  }
});
