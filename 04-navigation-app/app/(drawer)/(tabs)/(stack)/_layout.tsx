import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        // headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Inicio" }}
      ></Stack.Screen>

      {/* Esto va en la version final */}
      {/* <Stack.Screen
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
      ></Stack.Screen> */}
    </Stack>
  );
};

export default StackLayout;
