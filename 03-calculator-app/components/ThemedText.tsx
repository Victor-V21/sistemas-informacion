import { globalStyles } from "@/styles/global-styles";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export const ThemedText = ({ children, variant = "h2", ...rest }: Props) => {
  return (
    <Text
      style={[
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      TehemedText
    </Text>
  );
};
