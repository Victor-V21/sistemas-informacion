import { nowPlayingAction } from "@/core/actions/movies";
import React from "react";
import { Pressable, Text, View } from "react-native";
import "../global.css";

const RootLayout = () => {
  nowPlayingAction();

  return (
    <View className="flex-1 bg-red-500 justify-center items-center">
      <Text className="text-white font-bold text-5xl">RootLayout</Text>
      <Pressable
        onPress={() => {
          console.log("presionado");
        }}
        className="active:opacity-50 mt-6 hover:opacity-80"
      >
        <Text className="text-3xl text-white mt-4 underline bg-blue-300 w-full text-center py-2 px-6 rounded-lg">
          Press me
        </Text>
      </Pressable>
    </View>
  );
};

export default RootLayout;
