import { View, Text } from 'react-native'
import React from 'react'

const CalorieCircle = ({ calories }: { calories: number }) => {
  return (
    <View className="bg-main-teal-bg h-24 w-24 rounded-full
      items-center justify-center shadow-md">
      <Text className="text-white font-bold text-lg">{calories}</Text>
      <Text className="text-white text-xs font-light">kcal</Text>
    </View>
  )
}

export default CalorieCircle