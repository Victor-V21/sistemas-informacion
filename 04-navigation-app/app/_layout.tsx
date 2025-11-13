import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import React, { useEffect } from "react";

const RootLayoutNav = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Slot />
    // <Drawer
    //   drawerContent={CustomDrawer}
    //   screenOptions={{
    //     overlayColor: "rgba(0, 0, 0, 0.7)",
    //     drawerActiveTintColor: "indigo",
    //     headerShadowVisible: false,
    //   }}
    // >
    //   <Drawer.Screen
    //     name="(tabs)"
    //     options={{
    //       drawerLabel: "Inicio",
    //       title: "Inicio",
    //       drawerIcon: ({ color, size }) => (
    //         <Ionicons name="home" size={size} color={color}></Ionicons>
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="user/index"
    //     options={{
    //       drawerLabel: "Usuario",
    //       title: "Usuario",
    //       drawerIcon: ({ color, size }) => (
    //         <Ionicons name="person" size={size} color={color}></Ionicons>
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="schedule/index"
    //     options={{
    //       drawerLabel: "Horario",
    //       title: "Horario",
    //       drawerIcon: ({ color, size }) => (
    //         <Ionicons name="calendar" size={size} color={color}></Ionicons>
    //       ),
    //     }}
    //   />
    // </Drawer>
  );
};

export default RootLayoutNav;
