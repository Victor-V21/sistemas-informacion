import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveBackgroundColor: "red",
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "stack",
          tabBarIcon: ({ color }) => {
            <FontAwesome size={28} name="address-book" color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen (tabs)",
          tabBarIcon: ({ color }) => {
            <FontAwesome size={28} name="home" color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => {
            <FontAwesome size={28} name="heartbeat" color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
