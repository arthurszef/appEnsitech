import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Ionicons from 'react-native-vector-icons/Ionicons'  

import HomeScreen from "./Components/HomeScreen/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";
import ConnexionScreen from "./Components/ConnexionScreen/ConnexionScreen";
import InscriptionScreen from "./Components/InscriptionScreen/InscriptionScreen";    

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{  headerShown: false }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{  headerShown: false }}/>
      <Stack.Screen name="Connexion" component={ConnexionScreen} options={{  headerShown: false }}/>
      <Stack.Screen name="Inscription" component={InscriptionScreen} options={{  headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
        tabBarIcon : ({focused, color, size}) => {
          let iconName;
          if (route.name == "Accueil") {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } 
          else if (route.name == "Profile") {
            iconName = focused ? 'person-sharp' : 'person-outline';
          } 
          else if (route.name == "Connexion") {
            iconName = focused ? 'lock-open-sharp' : 'lock-open-outline';
          }
          return <Ionicons  name={iconName} size={20} color={color} type={'Ionicons'}/>
        },
        tabBarActiveTintColor: 'rgba(255,255,255,255)',
        tabBarActiveBackgroundColor:'rgba(28,32,35,255)' ,
        tabBarInactiveBackgroundColor:'rgba(28,32,35,255)' ,
        tabBarInactiveTintColor :'rgba(115,127,139,255)' , 
      })}
      >
        <Tab.Screen name='Accueil' component={HomeScreen} options={{  headerShown: false }}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{  headerShown: false }}/>
        <Tab.Screen name='Connexion' component={ConnexionScreen} options={{  headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
