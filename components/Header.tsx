import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

const Header = ({ title }: { title: string }) => {
  return (
    <SafeAreaView className="bg-main-teal-bg relative w-full min-h-[80px] shadow-xl z-10
      justify-center items-center flex-row">
      <Text className="text-white text-lg font-semibold">{title}</Text>
      <View className="absolute right-4 bottom-2 rounded-md p-2 bg-white">
        <SimpleLineIcons
          name="user"
          size={15}
          color="#65d8cf"
        />
      </View>
    </SafeAreaView>
  )
}

export default Header