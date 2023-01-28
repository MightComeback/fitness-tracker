import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MainTitle from '../components/MainTitle';
import Title from '../components/Title';
import WorkoutToday from '../components/WorkoutToday';
import { WorkoutData } from '../data/workoutData'
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';

const WorkoutScreen = () => {
  const nav = useNavigation();
  const dayToday = new Date();

  const dateArray = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]

  const todayExercises = WorkoutData.filter((workout) => workout.day == dateArray[dayToday.getDay()])[0];

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="absolute top-16">
        <MainTitle 
          title="Configure your"
          secondaryTitle="Workouts"
        />
      </View>
      <View className="mt-20 items-center">
        <View className="my-6">
          <Title title={dateArray[dayToday.getDay()]} />
        </View>
        <View className="justify-center">
          {todayExercises.exercises.map((exercise, idx) => (
            <View className="flex-row justify-between w-screen px-8">
              <TouchableOpacity>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
              <View key={idx} className="justify-center space-y-2">
                <Text className="text-left">{exercise}</Text>
              </View>
            </View>
          ))}
        </View>
        <View className="mt-16 items-center space-y-4">
          <Title title="Add Exercises:" />
          <TextInput
            className="h-8 w-60 mx-8 bg-white rounded-md shadow-lg pr-6"
            placeholder="Exercise"
          />
          <MainButton title="+" href="#" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WorkoutScreen