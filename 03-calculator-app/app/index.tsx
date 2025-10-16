import { CalculatorButton } from "@/components/CalculatorButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemedText variant="h1">20x20</ThemedText>
        <ThemedText variant="h2">400</ThemedText>
      </View>

      {/* Buttons rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          color={Colors.lightGray}
          onPress={() => console.log("c")}
        />
        <CalculatorButton
          label="+/-"
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
      {/* Numbers rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => console.log("7")}
        />
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => console.log("8")}
        />
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => console.log("9")}
        />
        <CalculatorButton
          label="x"
          color={Colors.darkGray}
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => console.log("4")}
        />
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => console.log("5")}
        />
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => console.log("6")}
        />
        <CalculatorButton
          label="-"
          color={Colors.darkGray}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => console.log("1")}
        />
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => console.log("2")}
        />
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => console.log("3")}
        />
        <CalculatorButton
          label="+"
          color={Colors.darkGray}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          color={Colors.darkGray}
          onPress={() => console.log("0")}
        />
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => console.log(".")}
        />
        <CalculatorButton
          label="="
          color={Colors.darkGray}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
}
