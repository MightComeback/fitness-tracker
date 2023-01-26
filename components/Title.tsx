import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ title }: string) => {
  return <Text className="text-lg text-black font-normal">{title}</Text>
}

export default Title