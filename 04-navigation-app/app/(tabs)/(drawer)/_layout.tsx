import { Drawer } from "expo-router/drawer";
import React from "react";

const DraweLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: "Usuario", title: "Usuario" }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{ drawerLabel: "Horario", title: "Horario" }}
      />
    </Drawer>
  );
};

export default DraweLayout;
