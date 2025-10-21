import { Colors } from "@/constants/colors";
import { globalStyles } from "@/styles/global-styles";
// import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      // onPress={() => Haptics.selectionAsync() onPress()}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          //   backgroundColor: color,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
