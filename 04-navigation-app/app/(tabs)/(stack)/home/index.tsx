import CustomButton from "@/share/components/CustomButton";
import { router } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {
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
