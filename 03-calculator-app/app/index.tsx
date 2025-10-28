import { CalculatorButton } from "@/components/CalculatorButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function CalculatorApp() {
  const {
    preNumber,
    formula,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemedText variant="h1">{formula}</ThemedText>
        {formula == preNumber ? (
          <ThemedText variant="h2"> </ThemedText>
        ) : (
          <ThemedText variant="h2">{preNumber}</ThemedText>
        )}
      </View>

      {/* Buttons rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          color={Colors.lightGray}
          onPress={() => clean()}
        />
        <CalculatorButton
          label="+/-"
          color={Colors.lightGray}
          onPress={() => toggleSign()}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          onPress={() => deleteLast()}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => divideOperation()}
        />
      </View>
      {/* Numbers rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => buildNumber("7")}
        />
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => buildNumber("8")}
        />
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => buildNumber("9")}
        />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => multiplyOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => buildNumber("4")}
        />
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => buildNumber("5")}
        />
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => buildNumber("6")}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => substractOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => buildNumber("1")}
        />
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => buildNumber("2")}
        />
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => buildNumber("3")}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => addOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          color={Colors.darkGray}
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => buildNumber(".")}
        />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
}
