import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MainButton from './MainButton'

const WorkoutToday = ({ workoutToday, caloriesBurnt }: { workoutToday: string, caloriesBurnt: number }) => {
  return (
    <View className="mt-4 relative flex-row max-w-full px-4 justify-start items-center">
      <View>
        {workoutToday.exercises.map((exercise, idx) => (
          <View key={idx} className="flex-row items-center space-x-2">
            <TouchableOpacity className="border border-teal-color
              rounded-full h-4 w-4" />
            <Text className="font-normal text-black my-1">{exercise}</Text>
          </View>
        ))}
      </View>
      <View className="items-center justify-between absolute top-0  right-8">
        <View className="items-center">
          <Text className="text-main-teal font-bold p-2 shadow-md">~{caloriesBurnt}</Text>
          <Text className="font-light text-xs">calories burnt</Text>
        </View>
      </View>
        <MainButton
          href="#"
          title="I Finished"
          className=""
        />
    </View>
  )
}

export default WorkoutToday