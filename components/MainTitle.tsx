import { View, Text } from 'react-native'
import React from 'react'

const MainTitle = ({ title, secondaryTitle }: { title: string, secondaryTitle: string }) => {
  return (
    <View className="flex-row space-x-2 items-center">
      <Text className="text-black text-xl">{title}</Text>
      <Text className="text-xl font-semibold text-main-teal">{secondaryTitle}</Text>
    </View>
  )
}

export default MainTitle