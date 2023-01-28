import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MainTitle from '../components/MainTitle';
import Title from '../components/Title';
import WorkoutToday from '../components/WorkoutToday';
import { CalorieData } from '../data/workoutData'
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';

const CalorieScreen = () => {
  const nav = useNavigation();

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
          secondaryTitle="Food"
        />
      </View>
      <View className="mt-20 items-center">
        <View className="my-6">
          <Title title="Your Nutrients for the Day" />
        </View>
        <View className="justify-center items-center">
          <View className="flex-row space-x-4">
            <Text className="text-main-teal">{CalorieData[0].calorieGoal} kcal</Text>
            <View className="h-4 w-[1px] bg-black" />
            <Text className="text-yellow-400">{CalorieData[0].caloriesToday} kcal</Text>
          </View>
          <View className="flex-row space-x-4 justify-between">
            <Text className="text-main-teal">{CalorieData[0].protein} g</Text>
            <Text className="font-light">protein</Text>
          </View>
          <View className="flex-row space-x-4 justify-between">
            <Text className="text-main-teal">{CalorieData[0].carbs} g</Text>
            <Text className="font-light">carbs</Text>
          </View>
          <View className="flex-row space-x-4 justify-between">
            <Text className="text-main-teal">{CalorieData[0].fats} g</Text>
            <Text className="font-light">fats</Text>
          </View>
        </View>
        <View className="mt-16 items-center space-y-4">
          <Title title="Add Foods:" />
          <TextInput
            className="h-8 w-60 mx-8 bg-white rounded-md shadow-lg pr-6"
            placeholder="Foods"
          />
          <MainButton title="+" href="#" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CalorieScreen