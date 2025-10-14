import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {

  const [loaded] = useFonts({
    MPlusRounded1c: require('../assets/fonts/MPLUSRounded1c-Thin.ttf')
  });

  if(!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Slot/>
      <StatusBar style="light"/>
    </View>
  );
}
