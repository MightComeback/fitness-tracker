import { View, Text, SafeAreaView } from 'react-native';
import React, { useLayoutEffect, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import CalorieCircle from '../components/CalorieCircle'
import NutrientGoalShowcase from '../components/NutrientGoalShowcase'
import MainTitle from '../components/MainTitle'
import WorkoutToday from '../components/WorkoutToday'
import Title from '../components/Title'
import { WorkoutData, CalorieData } from '../data/workoutData'


const HomeScreen = () => {
  const nav = useNavigation();

  const dayToday = new Date();
  const dateArray = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]

  const workoutDataArray = WorkoutData.filter((workout) => workout.day == dateArray[dayToday.getDay()]);
  const workoutTodayData = workoutDataArray[0];
  const calorieData = CalorieData[0];

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
      <Header title="Calorie Tracker" />
      <SafeAreaView className="bg-white flex-1">
        <View className="mt-12 mx-8 justify-between flex-row">
          {/* Add dynamic calorie count */}
          <CalorieCircle calories={calorieData.caloriesToday} />
          {/* Add dynamic goals */}
          <NutrientGoalShowcase
            calorieGoal={calorieData.calorieGoal}
            protein={calorieData.protein}
            carbs={calorieData.carbs}
            fats={calorieData.fats}
          />
        </View>
        {/* Add dynamic day change */}
        <View className="items-center justify-center mt-12 mx-2">
          <MainTitle title="Today is" secondaryTitle={dateArray[dayToday.getDay()]} />
          <View className="mt-8 mx-2 w-full">
            <Title title="Your workout for the day:" />
            <WorkoutToday workoutToday={workoutTodayData} caloriesBurnt={calorieData.caloriesToday} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen