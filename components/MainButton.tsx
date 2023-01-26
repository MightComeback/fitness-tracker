import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MainButton = ({ className, href, title }: { className?: string, href: string, title: string }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      className={`bg-main-teal-bg rounded-xl items-center
      justify-center p-2 px-4 absolute bottom-0 right-2 ${className}`}>
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MainButton