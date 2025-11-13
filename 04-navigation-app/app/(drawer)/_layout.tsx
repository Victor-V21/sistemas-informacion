import CustomDrawer from "@/share/components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

// Este es el bueno

const DraweLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.7)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color}></Ionicons>
          ),
        }}
      />
    </Drawer>
  );
};

export default DraweLayout;
