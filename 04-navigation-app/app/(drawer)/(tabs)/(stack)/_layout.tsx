import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftTap = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        // headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            onPress={() => onHeaderLeftTap(canGoBack)}
            color={tintColor}
            name={canGoBack ? "arrow-back-circle-outline" : "menu"}
            size={20}
            className="mr-5"
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Inicio " }}
      ></Stack.Screen>

      <Stack.Screen
        name="products/index"
        options={{ title: "Productos", animation: "ios_from_left" }}
      ></Stack.Screen>

      <Stack.Screen
        name="products/[id]"
        options={{ title: "Detalles del producto" }}
      ></Stack.Screen>

      <Stack.Screen
        name="profile/index"
        options={{ title: "Perfil" }}
      ></Stack.Screen>

      <Stack.Screen
        name="settings/index"
        options={{ title: "Configuración" }}
      ></Stack.Screen>
    </Stack>
  );
};

export default StackLayout;
