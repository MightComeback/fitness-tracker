import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import CalorieScreen from './screens/CalorieScreen';
import React, { useLayoutEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ tabBarActiveTintColor: "#65d8cf" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => {
              return <MaterialCommunityIcons name="home" size={24} color={props.color} />;
            },
          }}
        />
        <Tab.Screen
          name="Workouts"
          component={WorkoutScreen}
          options={{
            tabBarIcon: (props) => {
              return <MaterialCommunityIcons name="dumbbell" size={24} color={props.color} />;
            },
          }}
        />
        <Tab.Screen
          name="Food"
          component={CalorieScreen}
          options={{
            tabBarIcon: (props) => {
              return <MaterialCommunityIcons name="food-apple" size={24} color={props.color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

