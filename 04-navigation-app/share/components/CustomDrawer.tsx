import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = ({ ...props }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-x1 bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work_black text-3xl">VM</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
