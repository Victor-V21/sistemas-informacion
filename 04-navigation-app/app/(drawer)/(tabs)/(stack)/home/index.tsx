import CustomButton from "@/share/components/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToogleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View className="flex-1 justify-center px-10 gap-1">
      <CustomButton color="primary" onPress={() => router.push("/products")}>
        Productos (stack)
      </CustomButton>

      <CustomButton color="primary" onPress={() => router.push("/profile")}>
        Perfil
      </CustomButton>

      <CustomButton color="primary" onPress={() => router.push("/settings")}>
        Configuración
      </CustomButton>

      <CustomButton
        variant="text-only"
        color="tertiary"
        onPress={() => router.push("/products")}
      >
        Productos
      </CustomButton>
      <CustomButton onPress={onToogleDrawer}>Abrir Menú</CustomButton>
    </View>
  );
};

export default HomeScreen;
