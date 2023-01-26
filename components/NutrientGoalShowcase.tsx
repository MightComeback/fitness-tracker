import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  calorieGoal: number;
  protein: number;
  carbs: number;
  fats: number;
}

const NutrientGoalShowcase = ({ calorieGoal, protein, carbs, fats }: Props) => {
  return (
    <View className="border border-teal-color max-w-full items-center justify-center p-3">
      <Text className="text-black mb-2">Your goal is:</Text>
      <View className="justify-between flex-row space-x-2 items-center">
        <Text className="text-black font-light">{calorieGoal} kcal</Text>
        <View className="w-[1px] h-12 bg-main-teal-bg mx-2" />
        <View>
          <Text className="font-light">{protein}g protein</Text>
          <Text className="font-light">{carbs}g carbs</Text>
          <Text className="font-light">{fats}g fats</Text>
        </View>
      </View>
    </View>
  )
}

export default NutrientGoalShowcase