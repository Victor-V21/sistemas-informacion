import { Colors } from "@/constants/colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText,
  onPress,
}: Props) => {
  return (
    <Pressable style={globalStyles.button} onPress={onPress}>
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
