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
    <View className="flex-1 justify-center px-10 gap-5">
      <CustomButton color="primary" onPress={() => router.push("/products")}>
        Productos
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
      <CustomButton onPress={onToogleDrawer}> Abrir Men</CustomButton>

      {/* <Link className="mb-5" href="/products">
        Productos
      </Link>
      <Link className="mb-5" href="/profile">
        Perfil
      </Link>
      <Link className="mb-5" href="/settings">
        Configuración
      </Link> */}
    </View>
  );
};

export default HomeScreen;
