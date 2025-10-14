import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        20 x 20
      </Text>
      <Text 
        style={globalStyles.subResult}> resultado </Text>
    </View>
  );
}
